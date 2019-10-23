const Discord = require('discord.js')
const client = new Discord.Client()
const auth = require('./auth.json')

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
	var words = "(Shelitos|Hielitos|Yelitos|Cirno|" + client.user.id + "|Hielos|hielocos|yelocos|yelos|shelos|chirunito|chiruno|nalgas heladas)"
	var shelitos_pattern = new RegExp(words, 'gi')
	if ( shelitos_pattern.test(msg.content) && msg.author.id != client.user.id ) // Are they talking to me?
	{
		if ( /fortuna/gi.test(msg.content) ) {
			var fortuna = fortunas[ rand(0, fortunas.length-1) ];
			msg.reply('**Tu fortuna:** '+fortuna)
		} else {
			//msg.reply('```'+msg.content+'```\nCy.')
			msg.reply(['Cy.','Ño.'][rand(0,1)])
		}
	}
	else
	{
		if ( /!fortuna/gi.test(msg.content) ) {
			let data = require('./data.json')
			let fortunas = data.fortunas
			let fortuna
			do { fortuna = fortunas[ rand(0, fortunas.length-1) ] } while( fortuna.startsWith("//") )
			//fortuna = parseExpressions(fortuna)
			msg.reply( fortuna.match('`') ? eval(fortuna) : fortuna )
		} else if ( /!dado\d+/gi.test(msg.content) ) {
			
		} else if ( /!caracola/gi.test(msg.content) ) {
			if (/^\s*?!caracola\s*?$/gi.test(msg.content)) {
				msg.reply('_Caracola_: ¿¡Y la puta pregunta ijode puta?!')
			} else if (/^\s*?[\w]+\s*?!caracola\s*?$/gi.test(msg.content) || /^\s*?!caracola\s*?[\w]+\s*?$/gi.test(msg.content)) {
				msg.reply('_Caracola_: Esa pregunta no la entiendo...')
			} else {
				var caracola = [
					"Cy.", "Ño.", "Puede ser.", "Pregunta otra vez.", "No puedo responder ahora.",
					"Si tu quieres.", "¿A quién le importa? ¡Fapéate!", "Eres puto.", "Mátate pendeja!", "No se."
				][rand(0,9)]
				msg.reply('_Caracola_: '+caracola)
			}
		} else if ( /!waifu/gi.test(msg.content) ) {
			var id = rand(0, waifus.options.length-1)
			var name = waifus.options[ id ].name,
				url = waifus.options[ id ].url,
				wclass = waifus.options[ id ].class
			var text, tclass
			do {
				id = rand(0, waifus.texts.length-1)
				text = waifus.texts[ id ].msg
				tclass = waifus.texts[ id ].class
				var cond = tclass == "*" || tclass.split(" ").includes(wclass)
			} while ( ! cond )
			text = text.replace("%s", '***'+name+'***')
			msg.reply(text+"\n\n"+url)
		}
	}
	//console.log({msg:msg})
})

client.login(auth.token)

function rand (min,max) {
    return Math.floor((Math.random() * (max-min+1)) + min)
}

// Debugging only
function getMinsMaxs (min, max) {
	var _min = (max-min)/2,
		_max = (max-min)/2;
	for(var i=0; i<500; i++){
		var _rand = rand (min, max)
		_min = (_rand<_min)?_rand:_min
		_max = (_rand>_max)?_rand:_max
	}
	console.log({min:_min,max:_max})
}

function parseExpressions (string) {
	/*
	// parse the expression "rand(min,max)"
	let numbers = string.replace(/.*?rand\s*?\(\s*?(\d+)\s*?,\s*?(\d+)\s*?\).*?/i, "$1,$2")
	let _rand = rand( parseInt(numbers.split(",")[0]), parseInt(numbers.split(",")[1]) )
	string = string.replace(/rand\s*?\(\s*?(\d+)\s*?,\s*?(\d+)\s*?\)/i, _rand)
	*/
	
	// If the string match any of the regexps here, then use eval(<match>) on those matches
	let expressions = [
		// Regexp											Expression to parse
		String.raw`rand\s*?\(\s*?\d+\s*?,\s*?\d+\s*?\)`,	// rand(min,max)
		String.raw`\[[\w\s,']+\]\[.+?\]`,					// rand(min,max)
	]
	
	for (let i=0; i<expressions.length; i++)
	{
		let expr = string.match( new RegExp(expressions[i]) )[0]		// get only the isolated desired expression to parse
		expr = eval(expr)												// parsing the expression
		string = string.replace( new RegExp(expressions[i]), expr )		// replacing the expression with the parsed one
	}
	
	return string
}

/***Waifu***/
var waifus = {
	texts: [
	{ class: '+18 ugly furry goddess',			msg: 'Tendrás una noche de pasión con %s.'},
	{ class: '* +18 loli doll furry goddess',	msg: 'Cruzaste tu mirada con %s y fue amor a primera vista.'},
	{ class: '*',								msg: 'Tienes química con %s.'},
	{ class: '* +18 ugly doll furry goddess',	msg: 'Estás predestinado a caer en los brazos de %s.'},
	{ class: '* +18 ugly doll furry goddess',	msg: 'Tendrás muchos hijos saludables con %s.'},
	{ class: '*',								msg: 'Te veo un futuro romántico con %s.'},
	{ class: '* +18 loli doll furry goddess',	msg: 'Se rumorea que %s está enamorada de tí, ¡Aprovecha!'},
	{ class: '*',								msg: 'Tienes un altísimo chance con %s.'},
	{ class: '* loli doll ugly furry',			msg: '%s quiere hacerte su sempai.'},
	{ class: '+18 ugly goddess furry',			msg: 'Tendrás un encuentro de una sola noche con %s.'},
	{ class: '* +18 ugly goddess',				msg: 'Te emborrachas con %s en plan de amigos, y terminan en una tormenta de pasión y lujuria.'},
	{ class: '*',								msg: 'Te topaste con %s, pero te friendzoneó. Mejor suerte para la próxima.'},
	{ class: '*',								msg: 'Le gustas mucho a %s.'},
	{ class: '*',								msg: '%s te ama en secreto.'},
	{ class: '*',								msg: 'Eres totalmente compatible con %s.'},
	{ class: '*',								msg: 'Tendrás un romance de telenovelas con %s.'},
	{ class: '* +18 ugly doll goddess',			msg: 'Conociste en una cita a ciegas a %s.'},
	{ class: '+18 doll goddess',				msg: 'Te fuiste de tragos y conociste a %s. Ahora no paran de mandarse mensajitos SMS.'},
	{ class: '* +18 doll goddess furry',		msg: 'Te armaste de valor y te confesaste a %s. Dice que se lo va a pensar y mañana te responde...'},
	{ class: '* +18 doll goddess',				msg: '%s perdió una apuesta con sus amigas. Ahora deberá salir contigo por una semana como castigo.'},
	{ class: '* +18 ugly doll goddess furry',	msg: '%s piensa que eres todo un hombre hecho y derecho.'},
	{ class: '*',								msg: '%s te admira.'},
	{ class: '* +18 loli doll goddess furry',	msg: 'Le das igual a %s.'},
	{ class: '* +18 loli doll goddess furry',	msg: 'Te acercas a %s, pero no muestra el más mínimo interés.'},
	{ class: '* +18 loli doll goddess furry',	msg: 'Le escribes a %s, y te deja en visto.'},
	{ class: '* +18 doll goddess furry',		msg: '%s piensa que no estás a su altura.'},
	{ class: '*',								msg: '%s te lo está sonsacando.'},
	{ class: '*',								msg: '%s y tú son el uno para el otro.'},
	{ class: '* +18 doll goddess furry',		msg: '%s tiene sexo contigo, pero también tiene sexo con otros.'},
	{ class: 'doll',							msg: 'Tu sexo con %s será excelente, si no te importa coger con plástico.'},
	{ class: 'doll',							msg: '%s es la mujer de tu vida. Pero la gente te mirará raro por andar con muñecas...'},
	{ class: 'doll',							msg: '%s cree que estás enfermo por desear a muñecas, le das asco.'},
	{ class: 'loli',							msg: '%s adora jugar contigo. Te vé como su hermano mayor.'},
	{ class: 'loli',							msg: 'Tendrás una carnal relación con %s. Pero a los días te arrestan por pederasta.'},
	{ class: 'goddess',							msg: 'Le caes bien a %s, pero no tiene interés en los mortales.'},
	{ class: 'goddess',							msg: '%s está dispuesta a unirse contigo por toda la eternidad.'},
	{ class: '*',								msg: 'Le resultas simpático a %s.'},
	{ class: '* +18 loli doll furry goddess',	msg: 'Cruzaste tu mirada con %s y le pareció respulsivo ver cómo te le quedas mirando como idiota.'},
	{ class: '*',								msg: '%s dice que puede oler tu virilidad masculina a kilómetros de distancia, y le encanta.'},
	],
	options: [
	{ name: 'Aisaka Taiga',								class: '*',			url: 'https://vignette.wikia.nocookie.net/toradora/images/e/ef/Taiga_Aisaka.png/revision/latest?cb=20140625225518&path-prefix=es' },
	{ name: 'Akari Akaza',								class: 'loli',		url: 'https://vignette.wikia.nocookie.net/personajes3875/images/2/24/Akari_Akaza.png/revision/latest?cb=20170313220512&path-prefix=es' },
	{ name: 'Aqua',										class: 'goddess',	url: 'https://media1.tenor.com/images/b3224c32cb6f6d9cd8f45df36dea61a7/tenor.gif?itemid=12243796' },
	{ name: 'Ashley Graham',							class: '*',			url: 'https://vignette.wikia.nocookie.net/residentevil/images/b/ba/Ashley_Graham_Alt.png/revision/latest?cb=20120522210611&path-prefix=es' },
	{ name: 'Azusa Nakano',								class: '*',			url: 'https://i.pinimg.com/originals/95/52/24/955224a8aaa93e20dbe41430393a077c.png' },
	{ name: 'Ayase Aragaki',							class: '*',			url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ec86135-dad3-4bf1-b791-4960372d978c/d6b1184-6b4b2360-e1c8-478c-a0ff-f6b94b8c24d3.png/v1/fill/w_872,h_917,strp/aragaki_ayase__by_michaelgo03_d6b1184-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NyIsInBhdGgiOiJcL2ZcLzZlYzg2MTM1LWRhZDMtNGJmMS1iNzkxLTQ5NjAzNzJkOTc4Y1wvZDZiMTE4NC02YjRiMjM2MC1lMWM4LTQ3OGMtYTBmZi1mNmI5NGI4YzI0ZDMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dCvrd6vB8cxELgW6S1Pxz4u3l0_tcC9-5SSVush_F9c' },
	{ name: 'Bulma',									class: '*',			url: 'https://vignette.wikia.nocookie.net/dragonball/images/6/64/Bulma_bunny_costume.PNG/revision/latest?cb=20120826164254' },
	{ name: 'N.18',										class: '*',			url: 'http://www.av3distri.fr/921-large_default/dragon-ball-glitter-glamours-android-c18-ver2-white-ver-23cm.jpg' },
	{ name: 'Chinatsu Yoshikawa',						class: 'loli',		url: 'https://www.anime-planet.com/images/characters/chinatsu-yoshikawa-27120.jpg?t=1517899244' },
	{ name: 'Cirno',									class: 'loli',		url: 'https://pbs.twimg.com/profile_images/672843761970376704/oJ2AJGn__400x400.jpg' }, // https://images-na.ssl-images-amazon.com/images/I/41h-mZKkakL.jpg
	{ name: 'La Toja Payasa',							class: 'loli',		url: 'http://pm1.narvii.com/6389/5687cffb9cef6df9a710fa8970dc793d486782b4_00.jpg' },
	//{ name: 'Claire Redfield',							class: '+18',		url: '' },
	{ name: 'Cruella Deville',							class: 'ugly',		url: 'https://vignette.wikia.nocookie.net/heroes-and-villians/images/1/16/Kisspng-cruella-de-vil-the-hundred-and-one-dalmatians-vill-5b108a5eb4ec51.4131172815278106547411.png/revision/latest?cb=20190321000735' },
	{ name: 'Dokuro Mitsukai',							class: 'loli',		url: 'https://vignette.wikia.nocookie.net/nico-allstarts-smash-royale/images/d/da/Bokusatsu-Tens.png/revision/latest?cb=20150516221745&path-prefix=es' },
	{ name: 'Ebola-tan',								class: 'ugly',		url: 'https://raikou2.donmai.us/7a/89/__ebola_chan_original_drawn_by_sly_slykick__7a896bcd87b823aadc8541ab86e5ecde.jpg' },
	{ name: 'Enma Ai',									class: 'goddess',	url: 'https://imgix.ranker.com/user_node_img/50083/1001657732/original/3-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces' },
	{ name: 'Etna',										class: 'goddess',	url: 'https://static.zerochan.net/Etna.full.863113.jpg' },
	{ name: 'Felicia',									class: '+18',		url: 'https://vignette.wikia.nocookie.net/neoencyclopedia/images/f/f4/Darkstalkers-felicia.png/revision/latest?cb=20111021053143' },
	{ name: 'Doña Florinda',							class: 'ugly',		url: 'https://uploads.candelaestereo.com/1/2017/05/dona.florinda.jpg' },
	{ name: 'Gwen Tennyson',							class: 'loli',		url: 'https://m.media-amazon.com/images/M/MV5BMjA0ODEyNzEyOF5BMl5BanBnXkFtZTgwNjAxODQ2MjE@._V1_UY1200_CR485,0,630,1200_AL_.jpg' },
	{ name: 'Hestia',									class: 'goddess',	url: 'https://vignette.wikia.nocookie.net/p__/images/e/eb/Hestia-drawing-sketch-5.png/revision/latest?cb=20181009224021&path-prefix=protagonist' },
	{ name: 'Hinaichigo',								class: 'doll',		url: 'https://i.pinimg.com/originals/90/35/d6/9035d643754a11ea42b62e0057d86494.jpg' },
	{ name: 'Holo',										class: 'goddess',	url: 'https://gaminguardian.com/wp-content/uploads/2018/08/Spice-Wolf-holo.jpg' },
	{ name: 'Hotaru Shidare',							class: '*',			url: 'https://i.pinimg.com/originals/95/54/6e/95546ef22809eea4daea1b0182a98541.jpg' },
	{ name: 'Ika Musume',								class: 'loli',		url: 'https://www.kanpekisetto.com/1425-large_default/shinryaku-ika-musume-figura-pvc-16-squid-girl-18-cm.jpg' },
	{ name: 'Index',									class: 'loli',		url: 'http://66.media.tumblr.com/a1dceff2c2791d81f58d1609c98a1a37/tumblr_mlvsqcb4NE1rjl3p9o1_500.gif' }, //https://static.zerochan.net/Index.full.1661669.jpg
	{ name: 'Jessie Team Rocket',						class: '*',			url: 'https://cdn.costumewall.com/wp-content/uploads/2017/03/jessie-team-rocket.jpg' },
	{ name: 'Jill Valentine',							class: '+18',		url: 'https://teppenthegame.com/_materials/img/world/heroes/hero009/char_sp.png' },
	{ name: 'Kagami Hiiragi',							class: '*',			url: 'https://static.tvmaze.com/uploads/images/medium_portrait/68/171337.jpg' },
	{ name: 'Kanna Kamui',								class: 'loli',		url: 'https://vignette.wikia.nocookie.net/maid-dragon/images/3/3b/Kannainfo.png/revision/latest/scale-to-width-down/200?cb=20170426221642&path-prefix=es' },
	{ name: 'Kousaka Kirino',							class: '*',			url: 'http://images6.fanpop.com/image/photos/34500000/Kirino-Kousaka-Screenshot-ore-no-imouto-ga-konna-ni-kawaii-wake-ga-nai-34523898-640-360.jpg' },
	{ name: 'Kokonoe Rin',								class: 'loli',		url: 'https://i.pinimg.com/originals/95/9e/6f/959e6fe6fb5351b567dbdb472a885006.jpg' },
	{ name: 'Konata Izumi',								class: '*',			url: 'https://images-na.ssl-images-amazon.com/images/I/41OfETc5frL._SL500_AC_SS350_.jpg' },
	{ name: 'Avatar Korra',								class: '*',			url: 'https://i.kym-cdn.com/photos/images/original/001/296/822/72b.jpg' },
	{ name: 'Kurisu Makise',							class: '+18',		url: 'https://vignette.wikia.nocookie.net/steins-gate/images/8/83/Kurisu_profile.png/revision/latest?cb=20141222010103' },
	{ name: 'Kuroko Shirai',							class: '*',			url: 'https://vignette.wikia.nocookie.net/vsbattles/images/9/94/KurokoShirai_picture.png/revision/latest?cb=20190508180350' },
	{ name: 'Gokou Ruri',								class: '*',			url: 'https://images-na.ssl-images-amazon.com/images/I/51zg8GW-NcL.jpg' },
	{ name: 'Lilith Aensland',							class: 'goddess',	url: 'https://vignette.wikia.nocookie.net/capcomdatabase/images/6/68/Darkstalkers3Lilith.png/revision/latest?cb=20100616170451' },
	{ name: 'Lola Bunny',								class: 'furry',		url: 'https://vignette.wikia.nocookie.net/looneytunes/images/b/b8/Lola_Bunny.png/revision/latest?cb=20190125182832' },
	{ name: 'Louise Françoise le Blanc de la Vallière',	class: '*',			url: 'https://wanikoko.com/wp-content/uploads/2018/07/Louise.Fran%C3%A7oise.de_.La_.Baume_.Le_.Blanc_.de_.La_.Valli%C3%A8re.full_.736059.jpg' }, // http://static.minitokyo.net/downloads/35/11/520585.jpg
	{ name: 'Lucy',										class: '*',			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n37O8yDhHfVKPp_ipnAuagnC5oX6nkXrJy-s4Tax7qfr9IHR' },
	{ name: 'Kaname Madoka',							class: 'loli',		url: 'https://vignette.wikia.nocookie.net/madokamagica/images/f/f8/Kaname_madoka_transparent.png/revision/latest/scale-to-width-down/327?cb=20131119192050&path-prefix=es' },
	{ name: 'Madotsuki',								class: 'loli',		url: 'https://i.redd.it/l8n9og5vqyq01.jpg' },
	{ name: 'Mai Shiranui',								class: '+18',		url: 'https://vignette.wikia.nocookie.net/deadoralive/images/f/fe/DOA6_Mai_C1.jpg/revision/latest?cb=20190618003930' },
	//{ name: 'Angelina Jolie',							class: '+18',		url: '' },
	{ name: 'Haruka/May',								class: '+18',		url: 'https://vignette.wikia.nocookie.net/es.pokemon/images/b/b5/May.png/revision/latest?cb=20120305164046' },
	{ name: 'Mayoi Hachikuji',							class: 'loli',		url: 'https://images-na.ssl-images-amazon.com/images/I/61L8xmwDQsL._SX425_.jpg' },
	{ name: 'Megumin',									class: '*',			url: 'https://vignette.wikia.nocookie.net/konosuba/images/3/3f/Megumin-anime.png/revision/latest?cb=20180328143334' },
	{ name: 'Mika Seido',								class: '*',			url: 'https://66.media.tumblr.com/tumblr_mam546RkTs1r6touqo1_500.jpg' },
	{ name: 'Hatsune Miku',								class: '*',			url: 'https://cdn.webshopapp.com/shops/256829/files/296524551/600x600x2/vocaloid-hatsune-miku-gradation-resort-spm-super-p.jpg' },
	{ name: 'Minene Uryū',								class: '*',			url: 'https://vignette.wikia.nocookie.net/wiki-mirai-nikki/images/2/2f/640px-Minene-Uryuu-minene-uryuu-31905488-1280-720.jpg/revision/latest?cb=20131013014855&path-prefix=es' },
	{ name: 'Mio Akiyama',								class: '*',			url: 'https://cdn.imgbin.com/23/12/15/imgbin-mio-akiyama-bass-guitar-k-on-bass-guitar-j4adqF7ghg01eLJr4k2MdzvcG.jpg' },
	{ name: 'Amane Misa',								class: '*',			url: 'https://iv1.lisimg.com/image/5876989/337full-misa-amane.jpg' },
	{ name: 'Kasumi/Misty',								class: '*',			url: 'https://cdn.bulbagarden.net/upload/thumb/f/f6/Lets_Go_Pikachu_Eevee_Misty.png/183px-Lets_Go_Pikachu_Eevee_Misty.png' },
	{ name: 'Mitsuba Marui',							class: 'loli',		url: 'https://cdn.myanimelist.net/r/360x360/images/characters/13/108378.jpg?s=419efff0b3001b8c0434997050c9086d' },
	{ name: 'Moemura',									class: '*',			url: 'https://gamepress.gg/magiarecord/sites/magiarecord/files/2019-06/homura%28glasses%29_uniform.png' },
	{ name: 'Morrigan Aensland',						class: 'godess',	url: 'https://www.fightersgeneration.com/characters2/morrigannvc2.gif' },
	{ name: 'Motoko Kusanagi',							class: '+18',		url: 'https://alchetron.com/cdn/motoko-kusanagi-d57dae75-e7b9-4b54-9c7c-20b48122f0e-resize-750.jpeg' }, // http://image.auction.co.kr/itemimage/e6/23/4a/e6234ab86.jpg
	//{ name: 'Tsumugi Kotobuki',							class: '*',			url: '' },
	//{ name: 'La bruja de Narnia',						class: 'ugly',		url: '' },
	{ name: 'Nonon Jakuzure',							class: '*',			url: 'https://i.pinimg.com/originals/79/11/eb/7911ebcf322f99199804baa3ef004b34.jpg' }, // https://cdna.artstation.com/p/assets/images/images/015/727/538/large/silent-art-211-fanart-82-nonon.jpg?1549403009
	//{ name: 'Orihime Inoue',							class: '*',			url: '' },
	//{ name: 'Ranma Saotome',							class: 'trap',		url: '' },
	//{ name: 'Rebecca Chambers',							class: '+18',		url: '' },
	{ name: 'Rem',										class: '*',			url: 'https://images-na.ssl-images-amazon.com/images/I/61onvAKXk6L._SY879_.jpg' },
	{ name: 'Rougue the Bat',							class: 'furry',		url: 'https://vignette.wikia.nocookie.net/sonic/images/d/d1/Rouge_The_Bat_%287%29.png/revision/latest?cb=20130310171118&path-prefix=es' },
	//{ name: 'Kuchiki Rukia',							class: '*',			url: '' },
	{ name: 'Ruri Hoshino',								class: '*',			url: 'https://www.anime-planet.com/images/characters/ruri-hoshino-9696.jpg' },
	{ name: 'Ryuko Matoi',								class: '*',			url: 'https://static.tvtropes.org/pmwiki/pub/images/ryuko_synchronized_anime.png' },
	{ name: 'Izumi Sagiri',								class: '*',			url: 'https://eromanga-senseiusa.com/assets/img/character/chara_02.png' },
	{ name: 'Sakura Kinomoto',							class: 'loli',		url: 'https://vignette.wikia.nocookie.net/sakuracardcaptors/images/b/b2/Ts-chara_item-1-l.png/revision/latest?cb=20170922042723&path-prefix=es' },
	{ name: 'Samus Aran',								class: '*',			url: 'https://cdn.primordiagamers.com/monthly_2019_01/large.mirco-cabbia-samus-finale-1-3.jpg.03fd4a82a2adcade60dcc0499530fe6e.jpg' },
	{ name: 'Satanichia McDowell Kurumizawa',			class: '*',			url: 'https://vignette.wikia.nocookie.net/gabdro/images/5/5e/Satania_visual.png/revision/latest?cb=20170212011105' },
	{ name: 'Kiryuin Satsuki',							class: '*',			url: 'https://i2.wp.com/aforanime.com/wp-content/uploads/2017/04/19059055960_ef3582f5ca_o.jpg?fit=2048%2C1152&ssl=1' }, // https://fsa.zobj.net/crop.php?r=cD-G1DcOCwRbO3TEYyq6t3t2O-rMKEWU1USw_MswUt3o1wz2f7wtrR3VCfj9Ldisou20gNPe85yQMBB5rrFjt-2Ljwey5HfSKbE_THhYagqEB2-8Ula3-RgJvVrJkQ1JCsbBF0zFhFyIfl3t9Va8UCjHPS65MvtGNnZNJdJKAaUN9OlatxBRRS_zOYUhOUzkPYuW07-eXYYbBelH
	{ name: 'Sena Kashiwazaki',							class: '*',			url: 'http://pm1.narvii.com/6050/44e1f0dd5df4deea4659a57c79eeb88800655938_00.jpg' },
	//{ name: 'Sherry Birkin',							class: 'loli',		url: '' },
	{ name: 'Shinku',									class: 'doll',		url: 'http://pm1.narvii.com/6278/bb95cf2c887baa86d9441c693293e201933b2418_00.jpg' },
	{ name: 'Suigintou',								class: 'doll',		url: 'https://www.hellocosplay.com/media/product/b0f/rozen-maiden-suigintou-cosplay-boots-new-version-306.jpg' },
	{ name: 'Suiseiseki',								class: 'doll',		url: 'http://data.whicdn.com/images/7623044/large.jpg' },
	{ name: 'Wendy Sulca',								class: 'ugly',		url: 'https://media.metrolatam.com/2019/06/29/wendysulca-0db24e82988121dfd9ec9bdb3589736e-900x600.jpg' },
	{ name: 'Suzuha Amane',								class: '*',			url: 'http://pa1.narvii.com/6677/b18b648cd73da93c5e442d2cf48c3fe45e73c9c9_00.gif' },
	{ name: 'Suzumiya Haruhi',							class: '*',			url: 'https://video-images.vice.com/articles/581c8da21780b60a4c7c07e1/lede/maxresdefault.jpg?crop=0.5625xw%3A1xh%3Bcenter%2Ccenter&resize=650%3A*&output-quality=55' },
	{ name: 'La Tigresa del Oriente',					class: 'ugly',		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/La_Tigresa_del_Oriente_-_Maracaibo.jpg/250px-La_Tigresa_del_Oriente_-_Maracaibo.jpg' },
	{ name: 'Tohru',									class: '*',			url: 'https://avatarfiles.alphacoders.com/145/145126.jpg' }, //https://d3ieicw58ybon5.cloudfront.net/exq/65/800.1200/shop/product/9aa1fb2da7d54f84b178e0467e006891.jpg https://c.wallhere.com/photos/22/7b/Tohru_Kobayashi_san_Chi_no_Maid_Dragon_blonde_horns_tail_yellow_eyes_legs_barefoot_big_boobs-1382249.jpg!d
	{ name: 'Tohsaka Rin',								class: '*',			url: 'https://p1.hiclipart.com/preview/58/57/79/rin-tohsaka-character-illustration-png-clipart-thumbnail.jpg' },
	{ name: 'Tomoko Kuroki',							class: '*',			url: 'https://i.pinimg.com/originals/d6/ab/43/d6ab43901d49eb0c8e4a2ee60bf9b697.png' },
	{ name: 'Umaru Doma',								class: '*',			url: 'http://animeperson.com/images/character/9fb8fc3fe7.jpg' },
	{ name: 'Uranai Baba',								class: 'ugly',		url: 'https://vignette.wikia.nocookie.net/dragonball/images/3/3e/Uranai_Baba_Artwork.png/revision/latest?cb=20170114185437&path-prefix=es' },
	{ name: 'Ursula',									class: 'ugly',		url: 'https://akns-images.eonline.com/eol_images/Entire_Site/2017117/rs_1024x577-171207132211-1024.ursula-little-mermaid.ct.120717.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90' },
	{ name: 'Yuno Gasai',								class: '*',			url: 'https://vignette.wikia.nocookie.net/villains/images/0/0c/Gasai_yuno_render_by_annaeditions24-d6ruhy7.png/revision/latest?cb=20180831094709' },
	]
}


