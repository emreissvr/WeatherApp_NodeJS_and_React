#  Getting Started with Create Node and React App

## Step By Step Installation And Run Guide 
install the node package manager(npm) to your command line.
```
# Install dependencies
npm install
```
## Creating database and table with sequelize modelling and migration 

## Installation
In the *dbconfig.js* created in the config folder, write the database password in single quotes to the right of 'root' like below image

![](https://github.com/emreissvr/WeatherApp_NodeJS_and_React/blob/main/Front-end(React.js)/src/assets/Image.png)


also fill in the password part in the config.json file like below image

![](https://github.com/emreissvr/WeatherApp_NodeJS_and_React/blob/main/Front-end(React.js)/src/assets/Image2.png)


Install MySQL to your computer from that site [Mysql Installation](https://dev.mysql.com/downloads/installer/) and then open your mysql command line in the vs code command line with below code 
```
# make sure you open the command window in the correct directory
mysql -u root -p 
```
Enter your MySQL database password 

![](https://github.com/emreissvr/WeatherApp_NodeJS_and_React/blob/main/Front-end(React.js)/src/assets/Image3.png)

Open another command window and type sequelize 

![](https://github.com/emreissvr/WeatherApp_NodeJS_and_React/blob/main/Front-end(React.js)/src/assets/Image4.png)

Since the model is ready, create a migration file by directly typing the code below
```
sequelize migration:create --name create_weathers_table 
```
Paste the codes in the migration file in the migrations folder into the newly created migration file. And then send this migration file to the database with the following command.
```
sequelize db:migrate 
```
write the following code in MySql command window then it will be created the 'weathers' table 
```
# click enter
run weatherdb;

# then type that command
describe weathers;
```
Log in to [weatherstack.com](https://weatherstack.com/) and use the given API key in the *getWeatherDataFromAPI* function and pull the data from the API to node.js
```
const fetch = require('node-fetch');
const API_KEY = "e3b2995931d84a258635f9f43c2e35bf";
.
.
.
const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${locationName}`;
```

## Run App

Right click on the back-end file and open in integrated terminal, then run the back-end on the "localhost:8080" port with the command below.
```
npm start
```

![](https://github.com/emreissvr/WeatherApp_NodeJS_and_React/blob/main/Front-end(React.js)/src/assets/Image6.png)


Open the front-end folder with open in integrated terminal and then run the front-end partition on the "localhost:3000" port with the command below.
```
npm start
```

![](https://github.com/emreissvr/WeatherApp_NodeJS_and_React/blob/main/Front-end(React.js)/src/assets/Image5.png)


