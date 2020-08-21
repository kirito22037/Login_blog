const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "raimysql",
    database: "blog",
    multipleStatements: true
});

module.exports = mysqlConnection;