const rand = require('../functions/utils').rand

const richEmbedFortuna = require('../commands/fortuna')
const richEmbedCaracola = require('../commands/caracola')
const richEmbedWaifu = require('../commands/waifus')
const evalFunction = require('../commands/eval')

module.exports = (client, message) => {
	
	let words = "(Shelitos|Hielitos|Yelitos|Cirno|" + client.user.id + "|Hielos|hielocos|yelocos|yelos|shelos|chirunito|chiruno|nalgas heladas)"
	let shelitos_pattern = new RegExp("(^|[^!])" + words, 'gi')
	
	if ( shelitos_pattern.test(message.content) && message.author.id != client.user.id ) // Are they talking to me?
	{
		if ( /fortuna/gi.test(message.content) ) {
			message.channel.send( richEmbedFortuna(message) )
		} else {
			//message.reply('```'+message.content+'```\nCy.')
			message.channel.send('`' + message.author.username + '` ' + ['Cy.','Ño.'][rand(0,1)])
		}
	}
	else
	{
		if ( /(!|#|-)fortuna/gi.test(message.content) ) {
			message.channel.send( richEmbedFortuna(message) )
		} else if ( /(!|#|-)dado\d+/gi.test(message.content) ) {
			
		} else if ( /(!|#|-)caracola/gi.test(message.content) ) {
			/*if (/^\s*?(!|#|-)caracola\s*?$/gi.test(message.content)) {
				message.channel.send( richEmbedCaracola("¿¡Y la puta pregunta ijode puta?!") )
			} else if (/^\s*?[\w]+\s*?(!|#|-)caracola\s*?$/gi.test(message.content) || /^\s*?(!|#|-)caracola\s*?[\w]+\s*?$/gi.test(message.content)) {
				message.channel.send( richEmbedCaracola("Esa pregunta no la entiendo...") )
			} else {
				message.channel.send( richEmbedCaracola() )
			}*/
		} else if ( /(!|#|-)waifu/gi.test(message.content) ) {
			message.channel.send( richEmbedWaifu(message) )
		} else if ( /^!yelitos di:\s*?(.+?)$/i.test(message.content) ) {
			message.channel.send( message.content.match( /^!yelitos di:\s*?(.+?)$/i )[1] )
		} else if ( /^(!|#|-)eval/gi.test(message.content) ) {
			evalFunction( message )
		}
	}
	
	let prefix = "!"
	if (message.content.indexOf(prefix)=== 0) {
		const args = message.content.slice(prefix.length).trim().split(/ +/g)
		const command = args.shift().toLowerCase();
		const cmd = client.commands.get(command);
		const mensaje = message.content.toString().toLowerCase()
		if (cmd) {
			cmd.run(client, message, args,mensaje);
		}
	}
}