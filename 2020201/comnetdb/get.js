
const MySQL = require('mysql');
const MySQLConnection = MySQL.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ted198199'
   


});



MySQLConnection.connect();

module.exports.MySQLConnector = function () {
    return MySQLConnection;
}

// host     : 'localhost',
// user     : 'root',
// password : '',
// database : 'foodbata'