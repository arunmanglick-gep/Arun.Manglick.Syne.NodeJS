// Arun Way:
module.exports.RDSFactory = function (msg) {
  var rdsConnect = require('./sqlLib.js');
  return new rdsConnect.SQLFactory();
}

module.exports.NoSQLFactory = function (msg) {
  var nosqlConnect = require('./nosqlLib.js');
  return new nosqlConnect.MongoFactory();
}
// ------------------------------------------------
// Manish Way:
// module.exports.FLFactory = {
//     getLogger: function () {
//         var fComp = require('./filelogger.js');
//         return new fComp.FileLogger();
//     }
// }
//
// module.exports.DBLFactory = {
//     getLogger: function () {
//         var dComp = require('./dblogger.js');
//         return new dComp.DBLogger();
//     }
// }
//------------------------------------------------
