// Geo Locate
let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async position => {
    let lat, lon, weather, air;
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      document.getElementById('latitude').textContent = lat.toFixed(2);
      document.getElementById('longitude').textContent = lon.toFixed(2);
      const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();
      weather = json.weather.currently;
      
      document.getElementById('summary').textContent = weather.summary;
      

      weather_hour = json.weather.hourly;     
      const now = new Date((weather_hour.data[0].time)*1000).getHours();
      const one = new Date((weather_hour.data[1].time)*1000).getHours(); 
      const two = new Date((weather_hour.data[2].time)*1000).getHours(); 
      const three = new Date((weather_hour.data[3].time)*1000).getHours(); 
      const four = new Date((weather_hour.data[4].time)*1000).getHours(); 
      const five = new Date((weather_hour.data[5].time)*1000).getHours(); 
      const six = new Date((weather_hour.data[6].time)*1000).getHours(); 
      const seven = new Date((weather_hour.data[7].time)*1000).getHours(); 
      const eight = new Date((weather_hour.data[8].time)*1000).getHours(); 
      const nine = new Date((weather_hour.data[9].time)*1000).getHours(); 
      const ten = new Date((weather_hour.data[10].time)*1000).getHours(); 
      const eleven = new Date((weather_hour.data[11].time)*1000).getHours(); 
      const twelve = new Date((weather_hour.data[12].time)*1000).getHours();  
      const thirteen = new Date((weather_hour.data[13].time)*1000).getHours();  
      const fourteen = new Date((weather_hour.data[14].time)*1000).getHours();  
      document.getElementById('now').textContent = now;
      document.getElementById('one').textContent = one;
      document.getElementById('two').textContent = two;
      document.getElementById('three').textContent = three;
      document.getElementById('four').textContent = four;
      document.getElementById('five').textContent = five;
      document.getElementById('six').textContent = six;
      document.getElementById('seven').textContent = seven;
      document.getElementById('eight').textContent = eight;
      document.getElementById('nine').textContent = nine;
      document.getElementById('ten').textContent = ten;
      document.getElementById('eleven').textContent = eleven;
      document.getElementById('twelve').textContent = twelve;
      document.getElementById('thirteen').textContent = thirteen;
      document.getElementById('fourteen').textContent = fourteen;

      document.getElementById('now').textContent = Math.round(weather_hour.data[0].temperature);
      document.getElementById('one_temp').textContent = Math.round(weather_hour.data[1].temperature);
      document.getElementById('two_temp').textContent = Math.round(weather_hour.data[2].temperature);
      document.getElementById('three_temp').textContent = Math.round(weather_hour.data[3].temperature);
      document.getElementById('four_temp').textContent = Math.round(weather_hour.data[4].temperature);
      document.getElementById('five_temp').textContent = Math.round(weather_hour.data[5].temperature);
      document.getElementById('six_temp').textContent = Math.round(weather_hour.data[6].temperature);
      document.getElementById('seven_temp').textContent = Math.round(weather_hour.data[7].temperature);
      document.getElementById('eight_temp').textContent = Math.round(weather_hour.data[8].temperature);
      document.getElementById('nine_temp').textContent = Math.round(weather_hour.data[9].temperature);
      document.getElementById('ten_temp').textContent = Math.round(weather_hour.data[10].temperature);
      document.getElementById('eleven_temp').textContent = Math.round(weather_hour.data[11].temperature);
      document.getElementById('twelve_temp').textContent = Math.round(weather_hour.data[12].temperature);
      document.getElementById('thirteen_temp').textContent = Math.round(weather_hour.data[13].temperature);
      document.getElementById('fourteen_temp').textContent = Math.round(weather_hour.data[14].temperature);

      document.getElementById('temp').textContent = Math.round(weather_hour.data[0].temperature);
      weather_daily = json.weather.daily; 

      const icon_2 = weather_daily.data[1].icon;
      const icon_3 = weather_daily.data[2].icon;
      const icon_4 = weather_daily.data[3].icon;
      const icon_5 = weather_daily.data[4].icon;
      const icon_6 = weather_daily.data[5].icon;
      const icon_7 = weather_daily.data[6].icon;


      if (icon_2 == "clear-day" ) {
        
         document.getElementById("icon_2").src = "/static/image/sunny.jpg";
      }else if (icon_2 == "partly-cloudy-day") {
        
      document.getElementById("icon_2").src = "/static/image/partly-cloudy.jpg";
      } else if (icon_2 == "cloudy"){

      document.getElementById("icon_2").src = "/static/image/cloud.jpg";
      }else if (icon_2 == "rain"){

      document.getElementById("icon_2").src = "/static/image/rain.jpg";
      }

      if (icon_3 == "clear-day" ) {
        
         document.getElementById("icon_3").src = "/static/image/sunny.jpg";
      }else if (icon_3 == "partly-cloudy-day") {
        
      document.getElementById("icon_3").src = "/static/image/partly-cloudy.jpg";
      } else if (icon_3 == "cloudy"){

      document.getElementById("icon_3").src = "/static/image/cloud.jpg";
      }else if (icon_3 == "rain"){

      document.getElementById("icon_3").src = "/static/image/rain.jpg";
      }

      if (icon_4 == "clear-day" ) {
        
         document.getElementById("icon_4").src = "/static/image/sunny.jpg";
      }else if (icon_4 == "partly-cloudy-day") {
        
      document.getElementById("icon_4").src = "/static/image/partly-cloudy.jpg";
      } else if (icon_4 == "cloudy"){

      document.getElementById("icon_4").src = "/static/image/cloud.jpg";
      }else if (icon_4 == "rain"){

      document.getElementById("icon_4").src = "/static/image/rain.jpg";
      }

      if (icon_5 == "clear-day" ) {
        
         document.getElementById("icon_5").src = "/static/image/sunny.jpg";
      }else if (icon_5 == "partly-cloudy-day") {
        
      document.getElementById("icon_5").src = "/static/image/partly-cloudy.jpg";
      } else if (icon_5 == "cloudy"){

      document.getElementById("icon_5").src = "/static/image/cloud.jpg";
      }else if (icon_5 == "rain"){

      document.getElementById("icon_5").src = "/static/image/rain.jpg";
      }

      if (icon_6 == "clear-day" ) {
        
         document.getElementById("icon_6").src = "/static/image/sunny.jpg";
      }else if (icon_6 == "partly-cloudy-day") {
        
      document.getElementById("icon_6").src = "/static/image/partly-cloudy.jpg";
      } else if (icon_6 == "cloudy"){

      document.getElementById("icon_6").src = "/static/image/cloud.jpg";
      }else if (icon_6 == "rain"){

      document.getElementById("icon_6").src = "/static/image/rain.jpg";
      }

      if (icon_7 == "clear-day" ) {
        
         document.getElementById("icon_7").src = "/static/image/sunny.jpg";
      }else if (icon_7 == "partly-cloudy-day") {
        
      document.getElementById("icon_7").src = "/static/image/partly-cloudy.jpg";
      } else if (icon_7 == "cloudy"){

      document.getElementById("icon_7").src = "/static/image/cloud.jpg";
      }else if (icon_7 == "rain"){

      document.getElementById("icon_7").src = "/static/image/rain.jpg";
      }

      const day2 = new Date((weather_daily.data[1].time)*1000);
      const day3 = new Date((weather_daily.data[2].time)*1000);
      const day4 = new Date((weather_daily.data[3].time)*1000);
      const day5 = new Date((weather_daily.data[4].time)*1000);
      const day6 = new Date((weather_daily.data[5].time)*1000);
      const day7 = new Date((weather_daily.data[6].time)*1000);
      document.getElementById('day2').textContent = day2.toDateString();
      document.getElementById('day3').textContent = day3.toDateString();
      document.getElementById('day4').textContent = day4.toDateString();
      document.getElementById('day5').textContent = day5.toDateString();
      document.getElementById('day6').textContent = day6.toDateString();
      document.getElementById('day7').textContent = day7.toDateString();


      document.getElementById('day2_high_temp').textContent = Math.round(weather_daily.data[1].temperatureHigh);
      document.getElementById('day3_high_temp').textContent = Math.round(weather_daily.data[2].temperatureHigh);
      document.getElementById('day4_high_temp').textContent = Math.round(weather_daily.data[3].temperatureHigh);
      document.getElementById('day5_high_temp').textContent = Math.round(weather_daily.data[4].temperatureHigh);
      document.getElementById('day6_high_temp').textContent = Math.round(weather_daily.data[5].temperatureHigh);
      document.getElementById('day7_high_temp').textContent = Math.round(weather_daily.data[6].temperatureHigh);

      document.getElementById('day2_low_temp').textContent = Math.round(weather_daily.data[1].temperatureLow);
      document.getElementById('day3_low_temp').textContent = Math.round(weather_daily.data[2].temperatureLow);
      document.getElementById('day4_low_temp').textContent = Math.round(weather_daily.data[3].temperatureLow);
      document.getElementById('day5_low_temp').textContent = Math.round(weather_daily.data[4].temperatureLow);
      document.getElementById('day6_low_temp').textContent = Math.round(weather_daily.data[5].temperatureLow);
      document.getElementById('day7_low_temp').textContent = Math.round(weather_daily.data[6].temperatureLow);

      const sr = new Date((weather_daily.data[0].sunriseTime)*1000);
      const ss = new Date((weather_daily.data[0].sunsetTime)*1000)
      document.getElementById('sunrise').textContent = sr.toString().substr(16,5);
      document.getElementById('sunset').textContent = ss.toString().substr(16,5);

      document.getElementById('wind').textContent = weather_daily.data[0].windSpeed;
      document.getElementById('uv').textContent = weather_daily.data[0].uvIndex;
      document.getElementById('cloud').textContent = weather_daily.data[0].cloudCover;
      document.getElementById('rain').textContent = Math.round(weather_daily.data[0].precipProbability);
      document.getElementById('precipitation').textContent = Math.round(weather_daily.data[0].precipIntensity);
      document.getElementById('visibility').textContent = weather_daily.data[0].visibility;
      document.getElementById('humidity').textContent = weather_daily.data[0].humidity;
      document.getElementById('pressure').textContent = (weather_daily.data[0].pressure*0.02953).toFixed(2);

    } catch (error) {
      console.error(error);
      air = { value: -1 };
      document.getElementById('aq_value').textContent = 'NO READING';
    }

    const data = { lat, lon,};
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/',options);
  });
} else {
  console.log('geolocation not available');
}