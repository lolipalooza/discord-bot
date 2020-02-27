exports.run = async (client, message, args) => {
	
	/*try {
		let expr = "ret=" + message.content.match( /^.eval (.+?)$/ )[1]
		let eval_expr = eval(expr)
		let returned_value
		
		if (typeof(eval_expr) == "string" || typeof(eval_expr) == "number" || typeof(eval_expr) == "undefined") {
			
			returned_value = eval_expr
			
		} else if (typeof(eval_expr) == "object") {
			
			returned_value = "{ "
			for (const [key, value] of Object.entries(eval_expr))
				returned_value += key + ": " + value + "\n  "
			returned_value += "}"
			
		}
		
		message.channel.send("```" + returned_value + "```")
	} catch (e) {
		message.channel.send("`error`\n" + "```" + e + "```")
	}*/
	
	console.log({message:message, args:args})
}

exports.help = {
	name: "eval",
	category: "Randurr",
	description: "Testea código javascript (¡funcionalidad en fase beta!).",
	usage: "eval( <javascript expression> )",
	aliases: []
}