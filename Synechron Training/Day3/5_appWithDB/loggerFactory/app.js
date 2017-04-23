var factory = require('./factory.js');

// ---------------------------------------------
// Arun Way:
var fl = factory.RDSFactory();
fl.db("Checking...");

// var dl = factory.NoSQLFactory();
// dl.db("Checking ...");
// -----------------------------------------------

// Manish Way:
// var fl = factory.FLFactory.getLogger();
// fl.log("Checking Manish...");
//
// var dl = factory.DBLFactory.getLogger();
// dl.log("Checking Manish...");
