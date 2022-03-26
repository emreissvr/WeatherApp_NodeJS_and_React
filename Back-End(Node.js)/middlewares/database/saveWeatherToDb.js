const db = require("../../src/models/Weather");


const saveWeatherToDb = async (req,res,next) => {

        
        // UI'dan gelen location Name'e göre veritabanındaki locationName kolonları dizi içerisinde obje olarak alındı 
        const findMatchLocationName = await db.findAll({
        attributes: ['locationName'],
            where: {
                locationName: data.location.name
            }
        })
        
        console.log(findMatchLocationName);

        // eğer findMatchLocationName içerisinde bir obje var ise weatherController'a yönlendirilir.
        //  Orada da bu LocationName'e göre tüm kolonların değeri json olarak alınıp client'a response edilir
        if (findMatchLocationName.length) {
            next();
        }
        
        // eğer findMatchLocationName dizisi içerisinde bir eleman yok ise veritabanında bu location name'e göre bir tablo yok demektir.
        // o zaman api'den çekilen jsondaki istenilen kolonları veritabanı kolonları ile eşleştirip yeni bir satır oluşturdum.
        if(!findMatchLocationName.length){
            try {
                
                const createRowToDB = await db.create({
                    latitude: data.location.lat,
                    longitude: data.location.lon,
                    locationName: data.location.name,
                    locationCountry: data.location.country,
                    locationRegion: data.location.region,
                    Temperature: data.current.temperature,
                    weatherIcons: data.current.weather_icons[0],
                    weatherDescriptions:  data.current.weather_descriptions[0],
                    windSpeed: data.current.wind_speed,
                    pressure: data.current.pressure,
                    humidity: data.current.humidity
                });
    
                console.log(createRowToDB);
                console.log("Data saved successfully ");

                // veritabanına kayıt yapıldıktan sonra veritabanından location Name'e göre veritabanından satırı json formatında almak için
                // weathercontroller'a yönlendirdim.
                next();

            } catch (error) {
                console.log(error);
            }
    
        }    

       

        
           
}


module.exports = saveWeatherToDb;