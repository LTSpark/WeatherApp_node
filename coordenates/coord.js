const axios=require('axios');
const key=require('../config/apiKey.json');

const getCoordinates = async(direction) => {

    let city=encodeURI(direction.direction);
    let country=encodeURI(direction.country);
    let region=encodeURI(direction.region);

    let APIkey="fe835d2b13f6e774285b4e98be675dfd";
    let petition=`http://api.positionstack.com/v1/forward?access_key=${key.positionStack}&query=${city}`;

    if(country!='none'){
        petition+=`&country=${country}`;
    }
    if(region!='none'){
        petition+=`&region=${region}`;
    }

    const instance = axios.create({
        baseURL: petition
    });

    try{
        const resp = await instance.get();
        const resultado=resp.data.data[0]
        const name=resultado.name;
        const latitude=resultado.latitude;
        const longitude=resultado.longitude;
        return{
            name,
            latitude,
            longitude
        }
    }catch(err){
        return "Error: Hubo un error ingresando los datos";
    }  
}

module.exports={
    getCoordinates
}
