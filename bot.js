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
			var fortuna = fortunas[ rand(0, fortunas.length-1) ];
			msg.reply(fortuna)
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

var fortunas = [
	'El partido político que apoyas te va a decepcionar.',
	'Eres el elegido.',
	'Te tocarás viendo la imagen de arriba.',
	'Probarás la pichula, y te va a gustar.',
	'Hoy dejarás de ser un sucio y apestoso hikki beta virgen: un trollebus te arrollará.',
	'Ya te cargó la gaver.',
	'Encontrarás una chica que quiere contigo, lo malo es que no tiene pichula.',
	'Tienes 13 años y ni idea de qué haces aquí, mejor lárgate al metroflog.',
	'Franco zombie revivirá e intentará dominar tu pais.',
	'Eres el cancer que mató a la baka, a las casas de árbol y haz venido por el monstro.',
	'Te molerán a golpes por sucio subnormal.',
	'Hoy perderás tu virginidad ||anal||.',
	'Tendrás un desafortunado encuentro con el anon de aguascalientes.',
	'Vete a hacer los deberes juanito, luego o tu mamita te quitará el acceso a internet y te castigará por una semana.',
	'Ésta puede ser tu gran noche.',
	'Al fin garcharás como los dioses. Bienvenido al mundo del CIDA.',
	//'La fepade anda tras de ti.',
	'Buena suerte con las lolis. Una podría invitarte a jugar muñequitas con ella.',
	'Cuidado con juanito calo, podría trolearte sabrosón hoy, mejor llévate puesta una armadura.',
	'Unos normalfags te invitarán unos tragos. CORRE A LAS COLINAS.',
	//'De la chingada, pero al menos no eres fabi.',
	'Irás a una fuesta a disfrutar de tu negrura.',
	'Hoy regresa sectachan del oxxo.',
	'Te darán un beso ||negro||.',
	'Lo que tienes en la mano, no lo tienes en la mano.',
	'Cuidado con la fabi army, se acercarán a tu casa a tocarte el timbre.',
	'Depredador es la forma superior de vida.',
	'La rubia te lo está sonsacando.',
	'Más vale pajaro en mano que CIDA en el ano.',
	'Tu padre te ama, y no en el sentido paternal.',
	'Te encontrarás con un antiguo amor, y verás lo feliz que es con otro mientras te hundes en tu soledad y miseria.',
	'Fracasarás en todo lo que te propongas, mejor ahorra energías quedándote en casa a fapearte por tu waifu :3',
	'Serás baneado por un moderador local.',
	'Tu vida social revivirá... con pésimas consecuencias para tu ano.',
	'Hoy vas a pasar todo el dia junto a tu ex||box360||.',
	'Te tocarás viendo la imagen de abajo.',
	'Tu waifu te engaña, la ví en un doujin.',
	'Se te caerá la pichula de tanto fap.',
	'Soñar no cuesta nada.',
	'¡No hay fortuna para ti hasta que pagues!',
	'Podría ser peor, podrías ser virgen, sin trabajo, vivir con tu madre, tener más de 20 años... oh wait.',
	'Descubrirás una oferta perrona en el oxxo.',
	'Hoy será un dia como todos los dias.',
	'Un optimista siempre encuentra una oportunidad en cada calamidad, un pesimista siempre encuentra una calamidad en cada oportunidad, y tu ||eres un pendejo wey, la neta||.',
	'Date un fuscazo.',
	'Mejor no te la digo.',
	'Sí.',
	//'Aquél Reino de la Razón no era nada más que el Reino de la Burguesía idealizado.',
	'No me preguntes, solo soy una chica. -risita pendeja-.',
	'Te harás millonario, luego lo pierdes todo invirtiendo en bienes raices',
	'Conocerás a una chica maravillosa de la que te enamorarás perdidamente ~~luego descubres que tiene pito~~.',
	'No se te va a quitar lo idiota u_u',
	'Recibirás una inmensa cantidad de dinero de un tio lejano ||pero a cambio de favores sexuales||.',
	'Te harás adicto al crack.',
	'Mañana te convertirás en mona china.',
	'Hoy te vas a morir ||pero de risa cuando veas los super ofertones en la tienda! ¡Todo a un 40% de descuento!||',
	'Tienes la mayor de todas riquezas: la de no desearla, porque eres bien pinche pobre vergas jeje',
	'Este año podrías pasarte unas muy especiales vacaciones navideñas junto a tu ex||box juan||',
	'Irás a una fiesta.... y luego amanecerás en una bañera sin un riñón.',
	'Hora de jalarle el pescuezo al ganzo',
	'404: fortuna no encontrada.',
	'Si inviertes en cripto, el valor de tu dinero se triplicará en una semana. Hazme caso, soy la fortuna y yo siempre llevo razón',
	//'No eres puto, eso solo una fase que dura toda la vida.',
	'¡Comodín! Escoje por qué orificio quieres que te violen primero :3',
	'Si vas a viajar hoy, te recomiendo no ir, morirás en ese viaje.',
	'Tus gustos siempre estarán bien culeros.',
	'Lo que no te mata te deja paralítico',
	'Hoy vas a remojar la nutria',
	'Hoy realizarás que toda tu vida es un gran despropósito.',
	'Un nuevo romance está en tu futuro ||con tu gfa krnl||.',
	'Te casarás con una atleta profesional. Si las competencias de comer pueden ser consideradas un deporte.',
	'Disfruta de la vida (mientras puedas...)',
	'Hagas lo que hagas, no se te ocurra mirás detrás de tí.',
	'Socorro me tienen secuestrado y encerrado en una habitación oscura sin comida por tres días haciéndome escribir fortunas pendejas. ¡Esto no es una broma, llamen a la policía!',
	'Temblará pronto en tu pais.',
	'Estás siendo rastreado por señor FBI.',
	'No puedo ayudarte, soy sólo una galleta :)',
	"You're waifu a shiet.",
	'Tu waifu apesta.',
	'Tres pueden mantener un secreto, si te deshaces de dos.',
	'Veo dinero en tu futuro. Aunque no es tuyo.',
	'¿Te gusta el cuckold? Porque pronto lo protagonizarás.',
	'¡Ya libera a esas niñas que tienes encadenadas en tu sótano maldito pederasta!',
	'Si comes algo y nadie te ve comerlo, no tiene calorías.',
	'Estos números debajo no significan absolutamente nada.<br>97 85 94 41 97',
	'Te estas volviendo mejor en lo que haces todos los días ||procrastinar||.',
	'Tanta masturbación te está dejando pendejete jeje.',
	'Ten cuidado, un poquito más pendejo y te mueres, ¿eh?',
	'Pronto encontrarás trabajo ~~como maquilero subpagado jeje~~.',
	'Ni lo intentes wey, ese vestido de tu mamá no más no te queda',
	'Mala suerte, esos frijoles ya estaban tronados.',
	'Tu waifu te ama. Lástima que no es real.',
	'Embarazarás a tu gato.',
	'Siempre serás una decepción para tu familia.',
	'_No tienes que ser perfecto para ser genial_. Listo, ya le di un consuelo barato a otro mediocre jeje.',
	'Toda comunidad que se divierta fingiendo que son idiotas, terminarán eventualmente llenandose de gente verdaderamente idiota ~~como tú wé jeje~~.',
	'Conocerás a tu waifu.',
	'Ya se te ha ido un tercio de tu vida.',
	'Sigue tus sueños, puedes ser todo lo que desees ||incluso narco jeje||.',
	'Algunos invesiles creen que las fortunas son para darle consejitos cursis a los perdedores! Me cago en ellos!',
	'El pasado es un regalo, el futuro es un presente y hoy es el mañana o ya ni me acuerdo como era la wea :\'v',
	'Tú te despiertas. Ella no.',
	'Mira, no.',
	'Una loli se enamorará de ti',
	'Hoy te convertirás a la religión de la cienciología',
	'Ya se le dañó el amortiguador a tu troca perrona ||otra vez||',
	'Si deseas algo con mucha fuerza el universo conspirará para que no pase nada.',
	'Te encontrarás un perro en la calle que necesita urgentemente que lo rescates y lo adoptes.',
	'Ayer se pasó el día que se suponía conocerías a tu media naranja.',
	'Tu número de la suerte es: ' + rand(1,99),
	'Mil bendiciones y buenas pajas llegarán a tí, pero solo si respondes a este post con un "gracias fortuna-san".',
	'Perros de tíndalos pierdes 10 de cordura.',
	'¿Crees en hilos pendejos? Porque estás participando en uno.',
	'Serás mod en _'+['lolnada', 'monstrochan', 'gastonchan', 'chanchochan', '4chan', '69chan', 'grasochan', 'cancerchan', 'mi verga ggg :\'v', 'pee-chan!', 'pelajuan', '2chan', 'cartonchan'][rand(0,12)]+'_',
	'Buena como las nalgas de tu gfa ggg',
	'Debiste estudiar farmacología.',
	'01001000 01101111 01101100 01100001 00100000 01110001 01110101 11101001 00100000 01101000 01100001 01100011 01100101 01110011 00111111 00100000 00111010 00101001', // https://www.rapidtables.com/convert/number/binary-to-ascii.html
	'La fortuna está descanzando, mejor usa los dados.',
	'Hoy habrá poca actividad en el chan ~~como siempre~~.',
	'Aún estás a tiempo para dejar de literalmente desperdiciar tu vida en _imageboards_.',
	'Muy pronto descubrirás que siempre si fuiste tremendo jotolón.',
	'Me quedé sin ideas para fortunas. Regresa mañana.',
	'Cuando pienses que el amor se ha olvidado de que estás ahí, vuela vuela con tu imaginación.',
	'Te hubiera convenido mejor estudiar gerencia.',
	'Ahora estás consciente de tu ano.',
	'Los doctores luchan duro desde el hospital para hacerte despertar de ese coma en el que llevas 20 años. ¡Por favor despierta!',
	'Ahora estás consciente de los latidos de tu corazón.',
	'Descubrirás tu vocación como urólogo.',
	'Te volverás un actor muy famoso y altamente cotizado ~~de películas snuff~~.',
	'¡Comodín! Todos en este hilo serán violados!',
	'Se te hará tu sueño de ser actor porno ~~pero de porno gay~~ ||y adivina quien es el que recibe||.',
	'Te irá bien ||¿Qué haces revisando el spoiler? ¡Ya te dije que te irá bien!||',
	//$config['fortunas'][] = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'][date('w')] . ', ' . date('j') . ' de ' . ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'][date('n')-1] . ' del ' . date('Y') . ' a las ' . date('g:i A') . ' y aquí andas de ocioso...';
	'Yo que tú me mandaba a revisar la próstata.',
	'Tu mecánico no es de fiar.',
	"Pa' qué quieres saber tu fortuna? Jaja salu2!",
	'¿Y yo qué voy a saber? Yo no soy 100tífiko :v',
	"'tate quieto o te saco el fierro cuña'o.",
	'Pasa por GO, cobra $200.',
	'Quedas atrapado con una sola vida en el último videojuego que jugaste. ¿Qué tan fregado estás?',
	'Serán tiempos de buenas cosechas para tu granja.',
	'Te salió la carta del sol, de la luna y del rey. ¿sabes lo que eso significa? ||Yo tampoco||.',
	'Tu novia es lencha, pero aún no lo sabe.',
];

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

/*
¿Cómo agregar funcionalidad para calcular precios de distintas monedas?

La página de localbtc cuenta con una api
https://openexchangerates.org/
https://localbitcoins.com//bitcoinaverage/ticker-all-currencies/
https://localbitcoins.com/api-docs/

además está esta otra página que no sé exactamente qué hace, pero recoge info de las anteriores y hace cálculos:
https://shauna.website/currency.json
*/
