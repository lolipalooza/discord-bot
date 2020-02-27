const Discord = require('discord.js')
const rand = require('../functions/utils').rand

/*module.exports = (text) => {
	
	let caracola_msg = [
		"Cy.", "Ño.", "Puede ser.", "Pregunta otra vez.", "No puedo responder ahora.",
		"Si tu quieres.", "¿A quién le importa? ¡Fapéate!", "Eres puto.", "Mátate pendeja!", "No se."
	][rand(0,9)]
	
	let response = '"' + (text?text:caracola_msg) + '"'
	
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
}*/

exports.run = async (client, message, args) => {
	let text
	if (args.length==0)
		text = "¿¡Y la puta pregunta ijode puta?!"
	else if (args.length==1)
		text = "Esa pregunta no la entiendo..."
	
	let caracola_msg = [
		"Cy.", "Ño.", "Puede ser.", "Pregunta otra vez.", "No puedo responder ahora.",
		"Si tu quieres.", "¿A quién le importa? ¡Fapéate!", "Eres puto.", "Mátate pendeja!", "No se."
	][rand(0,9)]
	
	let response = '"' + (text?text:caracola_msg) + '"'
	
	let richEmbed = new Discord.RichEmbed()
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
	message.channel.send(richEmbed)
	
  /*if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Necesitas ser administrador para usar este comando.")
  if(!args) return message.channel.send("Necesitas escribir cuanta exp quieres agregar.")
  if (isNaN(args[0])||args[0]<1) return message.channel.send("Solo numeros positivos.")
  if(!message.mentions.users.first()) return message.channel.send("Necesitas mencionar al usuario al cual le vas a agregar exp.")
  
  let user = message.mentions.users.first()
  if(user.bot) return message.channel.send("Neta? a un bot? njd")
  let member = await db.fetch(`${message.guild.id}exp${user.id}`) || {}
  
  if(!member.exp) member.exp=0
  member.exp += parseInt(args[0])
  if(member.exp<0) member.exp=0
  
  member.lvl = client.lvlfromexp(member.exp)
  
  message.channel.send(`El usuario ${user.tag} ahora tiene ${client.expfromlevel(member.exp)} exp en el nivel ${member.lvl}`)
  
  db.set(`${message.guild.id}exp${user.id}`,member)*/
}

exports.help = {
  name: "caracola",
  category: "Randurr",
  description: "Hazle una pregunta a la cara de cola, a ver qué te dice jeje...",
  usage: "caracola <pregunta tipo cy/ño>",
  aliases: []
}