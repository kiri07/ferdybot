const ProgrammatoriAnonimiID = '797101789300129802'
const musicChannelID = '817051166016929822'

const singSong = (client, song) => {
	
		client.guilds.cache.get(ProgrammatoriAnonimiID)	// serverid
			.channels.cache.get(musicChannelID)			// groovyid
			.send("-p " + song);
	}

module.exports = {
	name: 'canta',
	description: 'Suonerò un pò per voi.',
	execute: singSong
	}

