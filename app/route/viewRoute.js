var express = require('express');
var router = express.Router();
var Config = require("../../config.json");

router.get('/', function(req, res) {
	var meta = {};
	meta.title = "照服秘笈";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("index.ejs",{meta: meta, version: Config.version});
});

module.exports = router;