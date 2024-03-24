const request = require("request");
const dotenv = require("dotenv").config();

const city = process.argv[2];
const option = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`,
  method: "GET",
  json: true,
};

request(option, (error, response, body) => {
  if (body.cod !== 200) {
    console.log(`エラー発生、${body.message}`);
    return;
  }
  console.log(`現在 ${city} の気温は ${body.main.temp} 度です。`);
});
