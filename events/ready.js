const fs = require('fs')

var prev_activity = ""

module.exports = client => {
	console.log(`Logged in as ${client.user.tag}!`)
	
	/*client.user.setPresence({
       status: "online",
       game: {
           name: "SimDate™ | sd.ayuda",
           type: "WATCHING"
       }
    })*/
	
	setActivity( client, getActivity() ) // Initialize the bot with an activity
}

// Change the bot activity each 12 minutes
setInterval(() => { setActivity( client, getActivity() )}, 1000*60*12)

function setActivity ( client, activity ) {	
	
	console.log("" + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + " - new activity: " + activity.type + " " + activity.name);
	
	// warning: STREAMING activity requires aditional parameter "url"! https://portalmybot.com/guia/mybot/ejemplos-basicos
	client.user.setPresence({
       status: "online",
       game: {
           name: activity.name,
           type: activity.type
       }
    })
}

function getActivity () {
	let activities = JSON.parse( fs.readFileSync('./data.json') ).bot_activities
	let id, type, name, cond
	
	type = ["PLAYING", "WATCHING", "LISTENING", "STREAMING"][rand(0,2)] // Streaming excluded
	do {
		id = rand(0, activities[type].length-1)
		name = activities[type][id]
	} while ( name.startsWith("//") || name == prev_activity )
	
	prev_activity = name
	
	return {
		type: type,
		name: name,
	}
}