/**
 * Created by zone on 2018/2/10.
 */
var mongoose = require("mongoose")
var config = require('./config.js')


module.exports = function(){
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.mongodb)

    // ..是回到当前目录的上一级目录的意思
    require("../models/server.model.js");




    return db
}