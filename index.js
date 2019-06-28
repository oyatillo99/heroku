const telegramBot =  require('node-telegram-bot-api');

const token = '832354568:AAF-0KaBTXkrQF7eY18Bk5_jOTxK8usfpDk';

const bot = new telegramBot(token, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello epta !')
})
