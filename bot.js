const Discord = require('discord.js');
const client = new Discord.Client();
 console.log("Scrpit By Yaaaz");

const adminprefix = "Y";
const developers = ['446446238452416538'];


client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : Yaaz`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**تم تغيير البلاينق الى** :white_check_mark:   ``${argresult}``  `)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تم تغيير الواتشينج الى** :white_check_mark:   ``${argresult}`` `)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تَم تغيير الليسينينق الى** :white_check_mark:  ``${argresult}``  `)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(`**تم تغييرك حالتك بالتويتش الى ** :white_check_mark:  ``${argresult}``  `)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم ل**ـ ...** :white_check_mark: ``${argresult}``  `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`جاري تغيير الأفتار... :white_check_mark: : `);
}
});

client.login(process.env.BOT_TOKEN);
