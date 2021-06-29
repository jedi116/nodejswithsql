var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sakila"

});

connection.connect((err) => {
    if (err) {
        console.log("error : " + err.stack);
        console.error("error : " + err.stack);
        return;
    }

    console.log("Database connected as id :" + connection.threadId);
});


module.exports = connection;