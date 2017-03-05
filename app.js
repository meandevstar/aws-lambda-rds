
var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder(),
    Q = require("q"),
    mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host     : 'Your RDS deployed url here',
    database : 'Your specific database name here',
    user     : 'Your username here',
    password : 'Your Password here'
});

module.exports = api;

api.get('/search', function (request) {

    if (request.queryString.param === undefined) {
        return 'Invalid request';
    }
    
    var sql = "Query to execute";
    
    return Q.promise(function(resolve, reject) {

        pool.getConnection(function(err, connection) {

            if (err) {
                connection.release();
                return reject(err);
            }

            connection.query(sql, function(err, rows) {
                if (err) {
                    connection.release();
                    return reject(err);
                }
    
                connection.release();
                return resolve(rows);
            });
        });
    });
}); 