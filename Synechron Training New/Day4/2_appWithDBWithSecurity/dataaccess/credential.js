const monk = require('monk');
const db = monk("localhost/nodetest1");
const credentialCollection = db.get("credentialcollection");
// --------------------------------------------------
module.exports.getCredentials = function () {
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
// --------------------------------------------
