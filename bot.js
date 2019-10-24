const Discord = require('discord.js')
const client = new Discord.Client()
const auth = require('./auth.json')
const data = require('./data.json')

client.on('ready', () => {
	let activity_type = "PLAYING" //["PLAYING", "WATCHING", "LISTENING", "STREAMING"][rand(0,2)]
	
	let activity = data.bot_activities[activity_type][rand(0,data.bot_activities[activity_type].length-1)]
	
	console.log(`Logged in as ${client.user.tag}!, activity: ${activity}`)
	
	// warning: STREAMING activity requires aditional parameter "url"! https://portalmybot.com/guia/mybot/ejemplos-basicos
	client.user.setPresence({
       status: "online",
       game: {
           name: activity,
           type: "PLAYING"
       }
    })
})

client.on('message', msg => {
	var words = "(Shelitos|Hielitos|Yelitos|Cirno|" + client.user.id + "|Hielos|hielocos|yelocos|yelos|shelos|chirunito|chiruno|nalgas heladas)"
	var shelitos_pattern = new RegExp(words, 'gi')
	if ( shelitos_pattern.test(msg.content) && msg.author.id != client.user.id ) // Are they talking to me?
	{
		if ( /fortuna/gi.test(msg.content) ) {
			msg.channel.send( richEmbedFortuna(msg) )
		} else {
			//msg.reply('```'+msg.content+'```\nCy.')
			msg.channel.send('`' + msg.author.username + '` ' + ['Cy.','Ño.'][rand(0,1)])
		}
	}
	else
	{
		if ( /(!|#|-)fortuna/gi.test(msg.content) ) {
			msg.channel.send( richEmbedFortuna(msg) )
		} else if ( /(!|#|-)dado\d+/gi.test(msg.content) ) {
			
		} else if ( /(!|#|-)caracola/gi.test(msg.content) ) {
			if (/^\s*?(!|#|-)caracola\s*?$/gi.test(msg.content)) {
				msg.channel.send( richEmbedCaracola("¿¡Y la puta pregunta ijode puta?!") )
			} else if (/^\s*?[\w]+\s*?(!|#|-)caracola\s*?$/gi.test(msg.content) || /^\s*?(!|#|-)caracola\s*?[\w]+\s*?$/gi.test(msg.content)) {
				msg.channel.send( richEmbedCaracola("Esa pregunta no la entiendo...") )
			} else {
				msg.channel.send( richEmbedCaracola() )
			}
		} else if ( /(!|#|-)waifu/gi.test(msg.content) ) {
			msg.channel.send( richEmbedWaifu(msg) )
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

function richEmbedFortuna(message) {
	let fortuna
	do { fortuna = data.fortunas[ rand(0, data.fortunas.length-1) ] } while( fortuna.startsWith("//") )
	fortuna = fortuna.match('`') ? eval(fortuna) : fortuna
	
	return new Discord.RichEmbed() 
		.setTitle("Tu Fortuna:")
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		//.setColor(0x00AE86)
		.setDescription( '"' + fortuna + '"' )
		//.setFooter("Fortuna", client.user.avatarURL)
		//.setImage(message.author.displayAvatarURL)
		.setThumbnail("https://www.fifteenspatulas.com/wp-content/uploads/2014/01/Fortune-Cookie-Recipe-Fifteen-Spatulas-2-500x427.jpg")
		//.setTimestamp()
		//.setURL("https://github.com/lolipalooza")
		//.addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
		//.addField("Campo en línea", "Debajo del campo en línea",  true)
		//.addBlankField(true)
		//.addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
}

function richEmbedWaifu(message) {
	var id = rand(0, data.waifus.options.length-1)
	var name, url, wclass
	do {
		name = data.waifus.options[ id ].name
		url = data.waifus.options[ id ].url
		wclass = data.waifus.options[ id ].class
	} while ( name.startsWith("//") )
	var text, tclass
	do {
		id = rand(0, data.waifus.texts.length-1)
		text = data.waifus.texts[ id ].msg
		tclass = data.waifus.texts[ id ].class
		var cond = tclass == "*" || tclass.split(" ").includes(wclass)
	} while ( ! cond )
	text = text.replace("%s", '***'+name+'***')
	
	return new Discord.RichEmbed() 
		.setTitle("Asignador de waifus:")
		.setAuthor(message.author.username, message.author.displayAvatarURL)
		//.setColor(0x00AE86)
		.setDescription( '"' + text + '"' )
		//.setFooter("Fortuna", client.user.avatarURL)
		.setImage(url)
		.setThumbnail(message.author.displayAvatarURL)
		//.setTimestamp()
		//.setURL("https://github.com/lolipalooza")
		//.addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
		//.addField("Campo en línea", "Debajo del campo en línea",  true)
		//.addBlankField(true)
		//.addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
}

function richEmbedCaracola(text) {
	var caracola_msg = [
		"Cy.", "Ño.", "Puede ser.", "Pregunta otra vez.", "No puedo responder ahora.",
		"Si tu quieres.", "¿A quién le importa? ¡Fapéate!", "Eres puto.", "Mátate pendeja!", "No se."
	][rand(0,9)]
	response = '"' + (text?text:caracola_msg) + '"'
	
	return new Discord.RichEmbed() 
		.setTitle("Caracola Mágica:")
		.setAuthor("Caracola", "https://images-na.ssl-images-amazon.com/images/I/91YDA4kSb-L.png")
		.setColor(0x00AE86)
		.setDescription( response )
		//.setFooter("Fortuna", client.user.avatarURL)
		//.setImage("https://images-na.ssl-images-amazon.com/images/I/91YDA4kSb-L.png")
		.setThumbnail("https://images-na.ssl-images-amazon.com/images/I/91YDA4kSb-L.png")
		//.setTimestamp()
		//.setURL("")
		//.addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
		//.addField("Campo en línea", "Debajo del campo en línea",  true)
		//.addBlankField(true)
		//.addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
}