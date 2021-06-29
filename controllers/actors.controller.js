var sqlconnection = require("../config/db");


exports.actorsReadcontroller = async(req, res) => {
    try {

        await sqlconnection.query("Select * From actor", (error, results, fields) => {
            if (error) {
                throw error;
            } else {
                res.send({ "actors": results });
            }
        });


    } catch (error) {
        res.send().json({
            "Error": error
        });
    }
}

exports.filmsReadController = async(req, res) => {
    try {
        sqlconnection.query("SELECT * From film", (err, results, fields) => {
            if (err) {
                throw err;
            } else {
                res.send({ "films": results });
            }
        });
    } catch (error) {
        res.send().json({ "Error": error });
    }
}