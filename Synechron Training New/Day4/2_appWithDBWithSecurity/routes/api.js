var express = require('express');
var router = express.Router();
// --------------------------------------------------
// http://localhost:3000/api/userlist
router.get('/userlist', function (req, res, next) {
  let dalObject = require('../dataaccess/user.js');
  dalObject.getAllUsers().then(data => {
    res.render('userlist', {
      title: 'User List View',
      users: data
    });
  }, msg => {
    console.log(msg);
    res.send([]);
  });
});
//--------------------------------------------
//http://localhost:3000/api/credentials
router.get('/credentials', function (req, res, next) {
     let dalObject = require('../dataaccess/credential.js');
     dalObject.getCredentials().then(
       data=>res.send(data),
       msg=>{
       console.log(msg);
       res.send([]);
     });
});
// --------------------------------------------------
module.exports = router;
