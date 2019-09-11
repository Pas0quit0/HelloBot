const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if(msg.content === 'Bia'){
      msg.reply('feia, gorda e burra');
  }
  if(msg.content === 'não fale essas coisas!!'){
    msg.reply(':( desgulpa');
}
});

client.login('NjE5NDk0MTA4MDc5MTk0MTMy.XXkDMA.QjXIxqR37RNtkfcGv3ZM8342MLU');