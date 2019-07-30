/* sample files here - feel free to use your own setup/generator */
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const zipcodes = require('zipcodes');
const request = require('request-promise');
const http = require('http');
require('dotenv').config();

app.use('/static', express.static('public'));
app.use(express.json({limit : '1mb'}));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

const engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const api_key = process.env.API_KEY;
app.get('/', async (req,res)  => {
  res.render('index');
});

app.post('/', urlencodedParser, async (req, res)  => {
  var zip = req.body.ZipCode;
  console.log(zip);
  var hills = zipcodes.lookup(zip);
  var latitude = hills.latitude;
  var longitude = hills.longitude;

  const weather_url_post = `https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}/?units=si`;
  var response_body = await request(weather_url_post);
  var weather_json = JSON.parse(response_body);
  console.log('temparature',weather_json.daily.data[0].temperatureHigh);
  console.log('summary',weather_json.daily.summary);
  console.log('icon',weather_json.daily.icon);

  var weather_data = weather_details(weather_json,zip);
    res.render('weather', weather_data);
});

app.get('/weather/:latlon', async (req, res) => {
  
  const latlon = req.params.latlon.split(',');
  console.log(latlon);
  const lat = latlon[0];
  const lon = latlon[1];
  console.log(lat, lon);
  
  const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
  const weather_response = await fetch(weather_url);
  const weather_data = await weather_response.json();

  const data = {
    weather: weather_data
  };
  res.json(data);
});

var weather_details = (weather_json,zip) => {
  
  var ts1 = new Date((weather_json.daily.data[0].time)*1000);
  var ts2 = new Date((weather_json.daily.data[1].time)*1000);
  var ts3 = new Date((weather_json.daily.data[2].time)*1000);
  var ts4 = new Date((weather_json.daily.data[3].time)*1000);
  var ts5 = new Date((weather_json.daily.data[4].time)*1000);
  var ts6 = new Date((weather_json.daily.data[5].time)*1000);
  var ts7 = new Date((weather_json.daily.data[6].time)*1000);
  var sr = new Date((weather_json.daily.data[0].sunriseTime)*1000);
  var ss = new Date((weather_json.daily.data[0].sunsetTime)*1000)
  
  var now = new Date((weather_json.hourly.data[0].time)*1000).getHours();
  var one = new Date((weather_json.hourly.data[1].time)*1000).getHours();
  var two = new Date((weather_json.hourly.data[2].time)*1000).getHours();
  var three = new Date((weather_json.hourly.data[3].time)*1000).getHours();
  var four = new Date((weather_json.hourly.data[4].time)*1000).getHours();
  var five = new Date((weather_json.hourly.data[5].time)*1000).getHours();
  var six = new Date((weather_json.hourly.data[6].time)*1000).getHours();
  var seven = new Date((weather_json.hourly.data[7].time)*1000).getHours();
  var eight = new Date((weather_json.hourly.data[8].time)*1000).getHours();
  var nine = new Date((weather_json.hourly.data[9].time)*1000).getHours();
  var ten = new Date((weather_json.hourly.data[10].time)*1000).getHours();
  var eleven = new Date((weather_json.hourly.data[11].time)*1000).getHours();
  var twelve = new Date((weather_json.hourly.data[12].time)*1000).getHours();
  var thirteen = new Date((weather_json.hourly.data[13].time)*1000).getHours();
  var fourteen = new Date((weather_json.hourly.data[14].time)*1000).getHours();
  var fifteen = new Date((weather_json.hourly.data[15].time)*1000).getHours();

  var now_temp = Math.round(weather_json.hourly.data[0].temperature);
  var one_temp = Math.round(weather_json.hourly.data[1].temperature);
  var two_temp = Math.round(weather_json.hourly.data[2].temperature);
  var three_temp = Math.round(weather_json.hourly.data[3].temperature);
  var four_temp = Math.round(weather_json.hourly.data[4].temperature);
  var five_temp = Math.round(weather_json.hourly.data[5].temperature);
  var six_temp = Math.round(weather_json.hourly.data[6].temperature);
  var seven_temp = Math.round(weather_json.hourly.data[7].temperature);
  var eight_temp = Math.round(weather_json.hourly.data[8].temperature);
  var nine_temp = Math.round(weather_json.hourly.data[8].temperature);
  var ten_temp = Math.round(weather_json.hourly.data[9].temperature);
  var eleven_temp = Math.round(weather_json.hourly.data[10].temperature);
  var twelve_temp = Math.round(weather_json.hourly.data[11].temperature);
  var thirteen_temp = Math.round(weather_json.hourly.data[12].temperature);
  var fourteen_temp = Math.round(weather_json.hourly.data[13].temperature);

		 var weather = {
            temp1 : Math.round(weather_json.daily.data[0].temperatureHigh),
            day1 : ts1.toDateString(),
            temp_high2 : Math.round(weather_json.daily.data[1].temperatureHigh),
            temp_low2 : Math.round(weather_json.daily.data[1].temperatureLow),
            day2 : ts2.toDateString(),
            temp_high3 : Math.round(weather_json.daily.data[2].temperatureHigh),
            temp_low3 : Math.round(weather_json.daily.data[2].temperatureLow),
            day3 :  ts3.toDateString(),
            temp_high4 : Math.round(weather_json.daily.data[3].temperatureHigh),
            temp_low4 : Math.round(weather_json.daily.data[3].temperatureLow),
            day4 : ts4.toDateString(),
            temp_high5 : Math.round(weather_json.daily.data[4].temperatureHigh),
            temp_low5 : Math.round(weather_json.daily.data[4].temperatureLow),
            day5 : ts5.toDateString(),
            temp_high6 : Math.round(weather_json.daily.data[5].temperatureHigh),
            temp_low6 : Math.round(weather_json.daily.data[5].temperatureLow),
            day6 : ts6.toDateString(),
            temp_high7 : Math.round(weather_json.daily.data[6].temperatureHigh),
            temp_low7 : Math.round(weather_json.daily.data[6].temperatureLow),
            day7 : ts7.toDateString(),
            description : weather_json.daily.summary,
            icon : weather_json.daily.icon,
            sunrise : sr.toString().substr(16,5),
            sunset : ss.toString().substr(16,5),
            wind : weather_json.daily.data[0].windSpeed,
            uv : weather_json.daily.data[0].uvIndex,
            visibility : Math.round(weather_json.daily.data[0].visibility),
            humidity : weather_json.daily.data[0].humidity,
            pressure : weather_json.daily.data[0].pressure,
            precipitation : Math.round(weather_json.daily.data[0].precipIntensity),
            rain : Math.round(weather_json.daily.data[0].precipProbability),
            cloud : weather_json.daily.data[0].cloudCover,
            now : now,
            one : one,
            two : two,
            three : three,
            four: four,
            five : five,
            six : six,
            seven : seven,
            eight : eight,
            nine : nine,
            ten : ten,
            eleven : eleven,
            twelve : twelve,
            thirteen : thirteen,
            fourteen : fourteen,
            now_temp : now_temp,
            one_temp : one_temp,
            two_temp : two_temp,
            three_temp : three_temp,
            four_temp : four_temp,
            five_temp : five_temp,
            six_temp : six_temp,
            seven_temp : seven_temp,
            eight_temp : eight_temp,
            nine_temp : nine_temp,
            ten_temp : ten_temp,
            eleven_temp : eleven_temp,
            twelve_temp : twelve_temp,
            thirteen_temp : thirteen_temp,
            fourteen_temp : fourteen_temp,
            zip : zip,
            icon_2 : weather_json.daily.data[1].icon,
            icon_3 : weather_json.daily.data[2].icon,
            icon_4 : weather_json.daily.data[3].icon,
            icon_5 : weather_json.daily.data[4].icon,
            icon_6 : weather_json.daily.data[5].icon,
            icon_7 : weather_json.daily.data[6].icon

        };

        var weather_data = {weather : weather};
        return weather_data;
}