var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// ------------------------------------------------
router.get('/userlist', function(req, res, next) {
   var monk = require('monk');
   var db = monk("localhost/nodetest1");
   var collection = db.get("usercollection");

  //  collection.find({},{},function (err,results) {
  //     res.render('userlist', { title: 'User List View', users:results });
  //  });

   collection.find({},{}).then((results)=>{
     res.render('userlist', { title: 'User List View New', users:results });
   },(err)=>{
     res.send("Error in Querying Customer data!");
   });
});
// ------------------------------------------------
module.exports = router;
