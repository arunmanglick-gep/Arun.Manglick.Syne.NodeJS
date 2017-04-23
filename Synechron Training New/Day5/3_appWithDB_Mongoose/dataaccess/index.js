const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodetest1');
const User = require('../models/user.js');
mongoose.Promise = global.Promise;

// var db = mongoose.createConnection('mongodb://localhost/nodetest1');
// db.once('open', function () { 

// });

module.exports.getAllUsers = function () {
    return new Promise((resolve,reject) => {
        User.find({}).then(results => {
            resolve(results);
        }, err => {
            console.log(err);
            reject("Some Error, Contact DAL Dev.");
        });
    });
};

module.exports.insertUser = function (data) {
    return new Promise((resolve,reject) => {
        let user = new User(data);
        // var error = user.validateSync();
        // console.log(error);
        user.save().then(result => {
            resolve(result);
        }, err => {
            console.log(err);
            reject("Some Error, Contact DAL Dev.");
        });
    });
};