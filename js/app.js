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

const city = 'Paris';
const apiKey = 'jGqB7txlrkgkmzLpMO7gGw==6Q12joJpzRe2P8Xj';
const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
fetch(url, {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error:', response.statusText);
  }
})
.then(result => {
  console.log(result);
})
.catch(error => {
  console.error('Error:', error);
});
 
function cityName(){
    console.log("Coucou");
    const cityN = document.querySelector(".city").value;
        return cityN;
}
cityName();
console.log(cityName());