var TelegramBot = require('node-telegram-bot-api');
var token = '189446286:AAEl3UQVGOqB8u_1kHwKc79Q6brDDfxG44Q';

var bot = new TelegramBot(
    token, {
        polling:true
    });

bot.getMe().then(function (me) {
    console.log('Hi, my name is %s!', me.username);
});

 bot.onText(/saludo/, function(msg, match) {
 	var fromId = msg.from.id;
 	var resp = match[1];
 	bot.sendMessage(fromId, "Hola " + msg.from.first_name);
 });

bot.onText(/location/, function (msg, match) {
    var fromId = msg.from.id;
  bot.sendLocation(fromId, 20.07482, -98.403327);
});

bot.onText(/photo/, function (msg, match) {
    var fromId = msg.from.id;
    var photo = "./assets/images/cats.png";
    bot.sendPhoto(fromId,photo,{caption: 'Lovely kittens'} );
});

bot.onText(/stiker/, function (msg, match) {
    var fromId = msg.from.id;
 	console.log(msg);
    var photo = "./assets/images/emoji_caca.png";
    bot.sendSticker(fromId,photo);
});

