const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('.searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('location-not-found');
const weather_body=document.querySelector('.weather_body');


 async function checkWeather(city){
    const api_key="130d676e37e5efc09054dc3d37a631d2";
    const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';
    const weather_data=await fetch('${url}').then(response=>response.json());

    if(weather_data.cod==='404')
    {
      location_not_found.computedStyleMap.display="flex";
      weather_body.computedStyleMap.display="none";
      console.log("error");
      return;
    }
    location_not_found.computedStyleMap.display="none";
    weather_body.computedStyleMap.display="flex";

    temperature.innerHTML='${Math.round(weather_data.main.temp)}°C';
    description.innerHTML='${weather_data.weather[0].description}';
    humidity.innerHTML='${weather_data.main.humidity}%';
    wind_speed.innerHTML='${weather_data.wind.speed}km/H';
    switch(weather_data.weather[0].main){
      case 'Clouds':
            weather_img.src="cloudy.png";
            break;
            case 'Clear':
            weather_img.src="clear.png";
            break;
            case 'Rain':
            weather_img.src="rain.png";
            break;
            case 'Mist':
            weather_img.src="mist.png";
            break;
            case 'Snow':
                  weather_img.src="snow.png";
                  break;

    }

    console.logo(weather_data);


}
 searchBtn.addEventListener('click',()=>{
       cjeckWeather(inputBox.value);
 })