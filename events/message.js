const rand = require('../functions/utils').rand

module.exports = (client, message) => {
	
	let words = "(Shelitos|Hielitos|Yelitos|Cirno|" + client.user.id + "|Hielos|hielocos|yelocos|yelos|shelos|chirunito|chiruno|nalgas heladas)"
	let shelitos_pattern = new RegExp("(^|[^!])" + words, 'gi')
	
	if ( shelitos_pattern.test(message.content) && message.author.id != client.user.id ) // Are they talking to me?
	{
		message.channel.send('`' + message.author.username + '` ' + ['Cy.','Ño.'][rand(0,1)])
	}
	else
	{
		if ( /^!yelitos di:\s*?(.+?)$/i.test(message.content) ) {
			message.channel.send( message.content.match( /^!yelitos di:\s*?(.+?)$/i )[1] )
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