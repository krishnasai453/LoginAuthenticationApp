var express = require('express');
var router = express.Router();



// Get Homepage

router.get('/register', function(req, res){
	res.render('register');
});

// Get Homepage

router.get('/login', function(req, res){
	res.render('login');
});

//Register User
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;


	//Validation
	//
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Password do not match').notEmpty();

	var errors = req.validationErrors();
	if(errors){
		console.log('errors found');
	}
	else{
		console.log('no errors found');
	}
});

module.exports = router;
