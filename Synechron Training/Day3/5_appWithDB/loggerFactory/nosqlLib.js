module.exports.MongoFactory = function () {
    this.db = function (msg) {
        console.log(msg + ", Connected to Mongo database");

        var monk = require('monk');
        var db = monk("localhost/nodetest1");
        var collection = db.get("usercollection");

       collection.find({},{}).then((results)=>{
         return results;
       },(err)=>{
         return err;
       });
    };
};
