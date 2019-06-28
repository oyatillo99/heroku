const telegramBot =  require('node-telegram-bot-api');

const token = '551090388:AAFSi-N0zAGw3wFde9j0nJ6IX1I3jfSWuIs';

const bot = new telegramBot(token, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello epta !')
})
