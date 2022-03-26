const CustomError = require("../../helpers/error/customError");

// weather'ın var olup olmadığını kontrol edip gerekli hata mesajını customError yapımla fırlattım
const checkWeatherExist = async (req,res,next) => {

    const _locationName =  await req.query.locationName
    
    if(_locationName === ""){
        return next(new CustomError("There is no such location name or never entered",400));
    }

    // kullanıcı var ise yani hata yok ise next() ile bir sonraki Middleware'e yani upperWords'e gidicek
    next();

};

module.exports = checkWeatherExist;