var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var dataRouter = require("./routes/data.routes.js")
var databaseConnection = require("./config/db.js");
require('dotenv').config({
    path: './config/config.env'
});

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/data", dataRouter);

databaseConnection;

var PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});