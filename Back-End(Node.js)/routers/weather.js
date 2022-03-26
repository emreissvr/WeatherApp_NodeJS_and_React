
const router = require("express").Router();
const addWeatherInfos = require("../controllers/weatherController");
const checkWeatherExist = require("../middlewares/api/checkWeatherExist");
const upperWords = require("../middlewares/api/upperWords");
const getWeatherDataFromAPI = require("../middlewares/api/getWeatherDataFromAPI")
const saveWeatherToDb = require("../middlewares/database/saveWeatherToDb");

// location route
router.post("/location", checkWeatherExist, upperWords, getWeatherDataFromAPI, saveWeatherToDb, addWeatherInfos);



module.exports = router;





