
const db = require("../src/models/Weather");
const Sequelize = require("sequelize");
const Db = require("../config/dbConfig");


const addWeatherInfos = async (req,res) => {

        // ister veritabanına kayıt yapılsın ister yapılmasın burada veritabanından 
        // istenen location Name'e göre veritabanından kayıt çekilir

        try {

            const _findAllRowFromDbByLocationName = await db.findAll({
                attributes: ['id','latitude','longitude','locationName','locationCountry','locationRegion','Temperature','weatherIcons','weatherDescriptions','windSpeed','pressure','humidity'],
                where: {
                    locationName: data.location.name
                }
            });
    
            console.log(_findAllRowFromDbByLocationName);
            console.log("The data was successfully retrieved from the database.");
    
            // istenen kayıt json formatında ve kontrollü olarak client'e response fırlattı.
            return res.status(200).json({
                success: true,
                data: _findAllRowFromDbByLocationName
            });
    
        } catch (error) {
            console.log(error);
        }


}

module.exports = addWeatherInfos;

 
