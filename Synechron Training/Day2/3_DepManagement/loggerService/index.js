module.exports.log = function (msg) {
    var loggerComponent = require("./logger.js");
    var myLogger = new loggerComponent.Logger();
    myLogger.log(msg);
}
