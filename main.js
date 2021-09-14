const Discord
const client
=
require('discord.js')
new Discord.Client()

client.on('guildMemberAdd', member =>{

member.guild.channels.cache.get('channel_id')
send(welcome${member.user.username}: );

});


client.login ("BOT TOKEN")

