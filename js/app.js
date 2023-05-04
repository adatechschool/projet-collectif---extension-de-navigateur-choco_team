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


async function Search(){
    console.log("Coucou");
    //const city = document.querySelector(".city").value;
    //const apiKey = 'jGqB7txlrkgkmzLpMO7gGw==6Q12joJpzRe2P8Xj';
    //const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;

    const data = await getCityApi()
    console.log(data)
    getHumidity(data)
}

async function getCityApi(){
  const city = document.querySelector(".city").value;
  console.log(city);
  const apiKey = 'jGqB7txlrkgkmzLpMO7gGw==6Q12joJpzRe2P8Xj';
  const response = await fetch (`https://api.api-ninjas.com/v1/weather?city=${city}`, { headers: {'X-Api-Key': apiKey}});

  const dataJson = await response.json();

  return dataJson;
}

function getHumidity (data) {
  console.log(data.humidity);
}