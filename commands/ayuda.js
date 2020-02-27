const Discord = require("discord.js")

exports.run = async(client, message, args, level) => {
	let prefix = "!"
	let command = args[0] || null;
	let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor(message.guild.me.displayHexColor)
		.setFooter(client.user.username, client.user.avatarURL)
		.setThumbnail(client.user.avatarURL)
  
	if (command == null) {
		
		var myCommands = new Array
		client.commands.forEach(command =>  myCommands.push(command))
		embed.setFooter("Soy 6eeM, un bot creado para cubrir la necesidad de un bot con sistema de exp/niveles", client.user.avatarURL)
		embed.setAuthor("= Lista de Comandos=")
		embed.setDescription("``" +`Usa ${prefix}help <nombre del commando> para más detalles. `+"``");
		const sorted = myCommands.sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
		let o="";
		let lastCat = sorted[0].help.category;
		let cat = "";
		sorted.forEach( c => {
			cat = c.help.category
			if(lastCat!==cat) {
				embed.addField(lastCat,o)
				o=""
			}
			o+= "`" +c.help.name + "`  "
			lastCat = cat;
		})
		embed.addField(cat,o)
		return message.channel.send({embed});
		
	}else{
		if (client.commands.has(command)){
			command = client.commands.get(command);
			embed.setTitle(`= ${command.help.name} =`)
			embed.setDescription(`${command.help.description}`)
			embed.addField(`Usage:`, `${prefix}${command.help.usage}`, true)
			return message.channel.send( {embed} )
		}else{
			embed.setTitle(`= Error 404: Comando no encontrado =`)
			embed.setDescription(`Intenta escribiendo \`${prefix}help\` para ver todos los comandos.`)
			return message.channel.send({embed})
		}
	}
}

exports.help = {
  name: "ayuda",
  category: "Util",
  description: "Muestra la lista de comandos.",
  usage: "help [comando]",
  aliases: {}
}