const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_demo'
});


connection.connect();

module.exports = connection;

// let data = connection.query("SELECT * FROM `user` where username = 'test1';", function(err, result, fields) {
//     console.log(`out error::`, err);
//     if(error) {return;}
//     console.log(result[0].username);
// });
