const Sequelize = require("sequelize");
const Db = require("../../config/dbConfig");

const db = Db.define('weathers', {
    id: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    latitude:{
        type: Sequelize.STRING(100)
    }, 
    longitude: {
        type: Sequelize.STRING(100) 
    },   
    locationName:{
        type: Sequelize.STRING(100)

    },
    locationCountry:{
        type: Sequelize.STRING(100)
    },
    locationRegion:{
        type: Sequelize.STRING(100)
    },
    Temperature: {
        type: Sequelize.INTEGER(50)
    },
    weatherIcons: {
        type: Sequelize.STRING(300)
    },
    weatherDescriptions:{
        type: Sequelize.STRING(300)
    },
    windSpeed: {
        type: Sequelize.INTEGER(50)
    },
    pressure:{
        type: Sequelize.INTEGER(50)
    },
    humidity:{
        type: Sequelize.INTEGER(50)
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
   
  });

module.exports = db;






  
// const Sequelize = require("sequelize");
// const sequelize = require("../database/databaseConnection");
// // we need to define out schema

// module.exports = sequelize.define("weatherInformations", {

//     id: {
//         type: Sequelize.INTEGER(10),
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     latitude: Sequelize.STRING(100),
//     longitude: Sequelize.STRING(100),
//     locationName: Sequelize.STRING(100), // allowNull = false yapmadım zaten backend'de kontrol edilcek
//     locationCountry: Sequelize.STRING(100),
//     locationRegion: Sequelize.STRING(100),
//     Temperature: Sequelize.INTEGER(50),
//     weatherIcons: Sequelize.STRING(300),
//     weatherDescriptions: Sequelize.STRING(300),
//     windSpeed: Sequelize.INTEGER(50),
//     pressure: Sequelize.INTEGER(50),
//     createdAt: Sequelize.DATE,
//     updatedAt: Sequelize.DATE

// });
