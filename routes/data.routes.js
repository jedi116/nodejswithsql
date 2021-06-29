var express = require("express");
var router = express.Router();
var { actorsReadcontroller, filmsReadController } = require('../controllers/actors.controller.js');

router.get("/", (req, res) => {
    res.send("hello world");
});

router.get("/actors", actorsReadcontroller);
router.get("/films", filmsReadController);
router.get("/", actorsReadcontroller);

module.exports = router;