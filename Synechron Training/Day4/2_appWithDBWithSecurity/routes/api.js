var express = require('express');
var router = express.Router();

router.get('/users', function (req, res, next) {
     let dalObject = require('../dataaccess');
     dalObject.getAllUsersWithP().then(data=>res.send(data),msg=>{
       console.log(msg);
       res.send([]);
     });
});

module.exports = router;