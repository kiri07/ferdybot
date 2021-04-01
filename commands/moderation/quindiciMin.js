const cron = require('cron');

const scheduledMessage = new cron.CronJob('00 00 16 * * *', () => {
  msg.channel.send(`Ok pausa 15 minuti, alle 11 e quindici su webex.`)
  
});

module.exports = 
{
	scheduledMessage
}