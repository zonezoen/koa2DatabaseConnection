/**
 * Created by zone on 2018/2/10.
 */
var config = require('../config/config')
const Sequelize = require('sequelize');


var sequelize = new Sequelize(
    config.MYSQL_DATABASE
    , config.MYSQL_USERNAME
    , config.MYSQL_PASSWORD
    , {
        host: config.MYSQL_HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('===============================================');
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('===============================================');
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;