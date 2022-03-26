// const dbConfig = require('../../config/dbConfig.js');
// const {Sequelize, DataTypes} = require('sequelize');


// const sequelize = new Sequelize(
//         "weatherdb",
//         'root',
//         'Fenerbahce1907', 
//         {
//             host: 'localhost',
//             dialect: "mysql",
//             operatorsAliases: false,
//             pool: {
//                 max: dbConfig.pool.max,
//                 min: dbConfig.pool.min,
//                 acquire: dbConfig.pool.acquire,
//                 idle: dbConfig.pool.idle
    
//             }
//         }
        
// );

// sequelize.authenticate()
// .then(() => {
//     console.log('connected..')
// })
// .catch(err => {
//     console.log('Error'+ err)
// })

// const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize

// db.weather = require('../models/Weather.js')(sequelize, DataTypes)


// db.sequelize.sync({ force: false })
// .then(() => {
//     console.log('yes re-sync done!')
// })


// module.exports = db





// // const Sequelize = require("sequelize");


// // const sequelize = new Sequelize(
// //     "weatherdb",
// //     'root',
// //     'Fenerbahce1907', 
// //     {
// //         host: 'localhost',
// //         dialect: "mysql",
// //         operatorsAliases: false,
// //     }
// // );



// //     sequelize.authenticate()
// //     .then(() => {
// //         console.log("connected");
// //     })
// //     .catch(err => {
// //         console.log("Error"+err);
// //     })




// // module.exports = sequelize;
// // global.sequelize = sequelize;  // istersen global değişken yap