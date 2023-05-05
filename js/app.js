// Object
// cloud_pct:100
// feels_like:13
// humidity:56
// max_temp:17
// min_temp:12
// sunrise:1683088156
// sunset:1683141925
// temp:14
// wind_degrees:80
// wind_speed:7.72

// -------------------------------


async function search(){
    console.log("Coucou");
    //const city = document.querySelector(".city").value;
    //const apiKey = 'jGqB7txlrkgkmzLpMO7gGw==6Q12joJpzRe2P8Xj';
    //const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;

    const data = await getCityApi()
    console.table(data)
    humidity(data)
    image(data)
    temperature(data)
    min_max_temp(data)
    feel_like(data)
    sunrise(data)
    sunset(data)
    wind_speed(data)
    windDegrees(data)
}

async function getCityApi(){
  const city = document.querySelector(".city").value;
  console.table(city);
  const apiKey = 'jGqB7txlrkgkmzLpMO7gGw==6Q12joJpzRe2P8Xj';
  const response = await fetch (`https://api.api-ninjas.com/v1/weather?city=${city}`, { headers: {'X-Api-Key': apiKey}});

  const dataJson = await response.json();

  return dataJson;
}

function image (data){
 let containerImage= document.querySelector(".images-box-1");
 let image= document.createElement("p");
 

  if(data.humidity<= 60 && data.cloud_pct <= 30) {
    //soleil
    // image.innerHTML=`<img src="image/soleil-64px.png">`
    // containerImage.appendChild(image);
    containerImage.innerHTML=`<img src="image/soleil-64px.png">`
    }
  if(data.humidity >= 25 && data.humidity <= 60 && data.cloud_pct >= 30) {
    //petite pluie
    containerImage.innerHTML=`<img src="image/P-pluie-64px.png">`
    
  }
  if(data.humidity > 60 && data.cloud_pct > 30){
        //grande pluie
        containerImage.innerHTML=`<img src="image/pluie-64px.png">`
        
  }
  if(data.cloud_pct > 30 && data.cloud_pct < 60){
    // nuageux
    containerImage.innerHTML=`<img src="image/l-nuage-64px.png">`
   
  }
  if(data.cloud_pct >= 60){
    //très nuageux
    containerImage.innerHTML=`<img src="image/nuageux-64px.png">`
    
  }
  if( data.cloud_pct > 10 && data.humidity < 90 && data.temp < 4){
    //neige
    containerImage.innerHTML=`<img src="image/Neige-64px.png">`
    
 }

}
function temperature(data){
  let containerTemperature= document.querySelector(".temperature");
//  let temperature= document.createElement("p");
containerTemperature.innerHTML=`<span>`+data.temp+` °C`+`</span>`

}

function min_max_temp(data){
  let containerMinTemp= document.querySelector(".value-min-temp");
  let containerMaxTemp= document.querySelector(".value-max-temp");
  containerMinTemp.innerHTML= `<span>`+data.min_temp+` °C`+`</span>`;
  containerMaxTemp.innerHTML= `<span>`+data.max_temp+` °C`+`</span>`;

}

function feel_like(data){
  let containerFeelLike= document.querySelector(".value-feel-like");
  containerFeelLike.innerHTML=`<span>`+data.feels_like+` °C`+`</span>`;
  //des images à afficher 

}

function humidity (data){
  let containerHumidity= document.querySelector(".value-humidity");
  containerHumidity.innerHTML=`<span>`+data.humidity+` %`+`</span>`;
 
}

// function speed_degrees_wind(data){
//   Librairie à afficher
// }

function sunrise(data){
    let containerSunrise= document.querySelector(".value-sunrise");
    const timestamp = data.sunrise;
    const heure = timestampToHour(timestamp); 
    containerSunrise.innerHTML=`<span>`+ heure +`</span>`;
    
    }
    
    function sunset(data){
    let containerSunset= document.querySelector(".value-sunset");
    const timestamp = data.sunset;
    const heure = timestampToHour(timestamp);
    containerSunset.innerHTML=`<span>`+ heure +`</span>`;

    }
    
    function timestampToHour(timestamp) {
      const date = new Date(timestamp * 1000); // Convertit les secondes en millisecondes
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      return `${hour}h${minute}`;
    }

    function wind_speed(data){
        let containerWindSpeed= document.querySelector(".value-wind-speed");
        const wind_speedInkmh = Math.trunc(data.wind_speed * 3.6);
        containerWindSpeed.innerHTML=`<span>`+ wind_speedInkmh +` km/h`+`</span>`
      }
    
    // function windDegrees(data){
    //     let containerWinde= document.querySelector(".value-wind-degees");
    //     containerWinde.innerHTML=`<span>`+data.wind_degrees+`°</span>`;    }
    function windDegrees(data) {
        let containerWindSpeed= document.querySelector(".value-wind-degrees");

        const windDegrees = data.wind_degrees;
        const compassDirections = ['Nord', 'Nord-Est', 'Est', 'Sud-Est', 'Sud', 'Sud-Ouest', 'Ouest', 'Norsd-Ouest'];
        const index = Math.round(windDegrees / 45) % 8;
        const compassDirection = compassDirections[index];

        containerWindSpeed.innerHTML=`<span>`+ compassDirection +`</span>`

      }