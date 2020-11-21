const axios=require('axios');
const key=require('../config/apiKey.json');

const getWeather=async(lat,long)=>{

    const petition=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key.weatherMap}&units=metric`;
    
    const resp= await axios.get(petition);
    
    const temp=resp.data.main.temp;
    const humidity=resp.data.main.humidity;
    const weather=resp.data.weather[0].description;
    const windVelocity=resp.data.wind.speed*3.6; //Convert from m/s to km/h
    const cloudiness=resp.data.clouds.all;

    return {
        temp,
        humidity,
        weather,
        windVelocity,
        cloudiness
    };
}

module.exports={
    getWeather
}