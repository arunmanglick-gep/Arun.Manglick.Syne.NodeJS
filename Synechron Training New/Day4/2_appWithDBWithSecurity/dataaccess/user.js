const monk = require('monk');
const db = monk("localhost/nodetest1");
const collection = db.get("usercollection");
const credentialCollection = db.get("credentialcollection");
// --------------------------------------------------
module.exports.getAllUsers = function (uname) {
    return new Promise((resolve,reject) => {
        credentialCollection.find({}).then(result => {
            console.log(result);
            resolve(result);
        }, err => {
            console.log(err);
            reject("Some Error, Contact DAL Dev.");
        });
    });
};
// --------------------------------------------------
module.exports.getUserWithUsername = function (uname) {
    return new Promise((resolve,reject) => {
        credentialCollection.findOne({"username":uname}).then(result => {
            console.log(result);
            resolve(result);
        }, err => {
            console.log(err);
            reject("Some Error, Contact DAL Dev.");
        });
    });
};
// --------------------------------------------------
module.exports.getUserWithEmail = function (uemail) {
    return new Promise((resolve,reject) => {
        credentialCollection.findOne({"email":uemail}).then(result => {
            console.log(result);
            resolve(result);
        }, err => {
            console.log(err);
            reject("Some Error, Contact DAL Dev.");
        });
    });
};
// --------------------------------------------------
module.exports.insertUser = function (data) {
    return new Promise((resolve,reject) => {
        collection.insert(data).then(result => {
            resolve(result);
        }, err => {
            console.log(err);
            reject("Some Error, Contact DAL Dev.");
        });
    });
};
// --------------------------------------------------
