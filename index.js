
let TelegramBot = require('node-telegram-bot-api');
let pars = require('./go.js')

const token = '';

const bot = new TelegramBot(token, { polling: true });
const curs = pars;


bot.on('message', (msg) => {
	console.log(msg)
	let text = msg.text;
	if (text == 'Dollar') {
		bot.sendMessage(msg.chat.id, curs) // Тут я хочу передать значение доллара из другого файла go.js
	}
	
})

