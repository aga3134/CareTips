var passport = require("passport");
var express = require('express');
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");
var auth = require("../controller/auth");

//router registers to /auth

router.get('/login', function(req, res) {
	var meta = {};
	meta.title = "照服秘笈 - 登入頁面";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("login.ejs",{meta: meta, version: Config.version, intentUrl: req.query.intentUrl});
});

router.get('/login-by-facebook', passport.authenticate("facebook",{scope : 'email'}));

router.get('/facebook/callback', function(req, res, next) {
	passport.authenticate("facebook", {
		successRedirect : util.GetIntentUrl(req),
		failureRedirect : '/auth/login?message='+encodeURIComponent('登入失敗')
	})(req, res, next);
});

router.get('/login-by-google', passport.authenticate("google",{scope : ['profile', 'email'], "prompt": "select_account" }));

router.get('/google/callback', function(req, res, next) {
	passport.authenticate("google", {
		successRedirect : util.GetIntentUrl(req),
		failureRedirect : '/auth/login?message='+encodeURIComponent('登入失敗')
	})(req, res, next);
});

router.post('/login-by-password', function(req, res, next){
	passport.authenticate("local", {
		successRedirect : util.GetIntentUrl(req),
		failureRedirect : '/auth/login?message='+encodeURIComponent('登入失敗')
	})(req, res, next);
});

router.post('/signup-by-password', auth.Signup);

router.post('/forget-password', auth.ForgetPassword);

router.post('/reset-password', auth.ResetPassword);

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;