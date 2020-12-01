const coord=require('../coordenates/coord');
const weather=require('../weather/weather');
const colors=require('colors');

const getInfo=async(direction)=>{

    let message="";
    try{

        const place= await coord.getCoordinates(direction);
        const report= await weather.getWeather(place.latitude,place.longitude);

        let fill="-".repeat(`Weather Report of ${place.name}`.length);

        message+=`\n-------------Weather Report of ${place.name}--------------\n`.green;
        message+=`\n\tLatitude: `+`${place.latitude}`.cyan+` Longitude: `+`${place.longitude}\n`.cyan;
        message+=`\n\tMain Weather:  `+`${report.weather}`.yellow;
        message+=`\n\tTemperature:   `+`${report.temp}ºC`.yellow;
        message+=`\n\tHumidity:      `+`${report.humidity}%`.yellow;
        message+=`\n\tCloudiness:    `+`${report.cloudiness}%`.yellow;
        message+=`\n\tWind velocity: `+`${report.windVelocity} km/h\n`.yellow;
        message+=`\n--------------------------${fill}`.green;

        return message;

    }catch(e){
        message=`We couldn't determine the weather of ${direction.direction}.`;
        message+=`\nError: ${e.response.status}, ${e.response.statusText}`;        
        return message.red;
    }
  
}

module.exports={
    getInfo
}