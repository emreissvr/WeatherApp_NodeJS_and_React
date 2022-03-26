const fetch = require('node-fetch');
const API_KEY = "e3b2995931d84a258635f9f43c2e35bf";
const {checkStatus, HTTPResponseError} = require("../../helpers/error/apiError");

const CustomError = require('../../helpers/error/customError');

const getWeatherDataFromAPI = async (req,res,next) => {

    try {
        const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${locationName}`;

        // client'tan gelen locationname'E göre göre weatherStack.com'dan çekildi.
        
        const response = await fetch(url);

        // Handling client and server errors = hem client hem de server errorleri kontrol edildi
        checkStatus(response);

        // gelen response json formatına dönüştürülüp bir sonraki middleware'e yani saveWeatherToDb 'ye yönlendirildi
        data = await response.json();
        next();
        
    } catch (error) {
        console.log("Error: ", error);
        return next(new CustomError("There was an error in the api connection. please check your url connection",400));
    }
    
}

module.exports = getWeatherDataFromAPI;