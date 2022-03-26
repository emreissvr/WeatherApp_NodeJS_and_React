const Sequelize = require("sequelize");
const Db = new Sequelize('weatherDB','root','',{
    host:"127.0.0.1",
    dialect:"mysql"
});

module.exports = Db;
