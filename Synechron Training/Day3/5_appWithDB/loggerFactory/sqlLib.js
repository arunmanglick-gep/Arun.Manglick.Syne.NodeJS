module.exports.SQLFactory = function () {
    this.db = function (msg) {
        console.log(msg + ", Connected to RDS database.");
    };
};
