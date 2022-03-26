"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("weathers", {
      id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    latitude: Sequelize.STRING(100),
    longitude: Sequelize.STRING(100),
    locationName: Sequelize.STRING(100), // allowNull = false yapmadım zaten backend'de kontrol edilcek
    locationCountry: Sequelize.STRING(100),
    locationRegion: Sequelize.STRING(100),
    Temperature: Sequelize.INTEGER(50),
    weatherIcons: Sequelize.STRING(300),
    weatherDescriptions: Sequelize.STRING(300),
    windSpeed: Sequelize.INTEGER(50),
    pressure: Sequelize.INTEGER(50),
    humidity: Sequelize.INTEGER(50),
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    
    });
  },

  async down(queryInterface, Sequelize) {
   return queryInterface.dropTable("weathers");
  },
};



