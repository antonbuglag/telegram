let TelegramBot = require('node-telegram-bot-api');
let pars        = require('./go.js')

const token = '';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const { chat } = msg;
  const { text } = msg.text;

  if (text === 'Dollar') {
    const curs = await pars();

    await bot.sendMessage(chat.id, curs)
  }
});

