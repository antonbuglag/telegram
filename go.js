const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.cbr.ru/currency_base/daily/';

function checkPS() {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) reject(error); // Если ошибка останавливаем выполнение этого блока кода и возвращаем ошибку

      const $    = cheerio.load(body);
      const data = $('#content > div > div > div > div.table-wrapper > div > table > tbody > tr:nth-child(12) > td:nth-child(5)').text();

      resolve(data); // Возвращаем данные из промиса
    });
  });
}

module.exports = checkPS;
