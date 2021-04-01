let fetch = require("fetch")
const request = require('request');
const cheerio = require('cheerio');


const url = 'https://www.cbr.ru/currency_base/daily/';

async function checkPS() {
  const data = await request(url, function(err, res, body) {
    if (err) throw err;
    let $ = cheerio.load(body)
    let data = $('#content > div > div > div > div.table-wrapper > div > table > tbody > tr:nth-child(12) > td:nth-child(5)').text();
    return data
  });

  return data;
}

(async () => {
  const data = await checkPS();
  
  console.log(data);
})();
