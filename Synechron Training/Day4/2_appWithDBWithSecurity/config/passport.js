var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function (req, email, password, done) {
		let dalObject = require('../dataaccess');
		let useremail;
		dalObject.getAllUsersWithP().then(
			data=>	{
				// console.log(data[0].email);
				useremail = data[0].email;
				if (email != useremail)
					return done(null, false, req.flash('loginMessage', 'No User Found'));
			},
			msg=>	console.log(msg)
		);
			// if (email != useremail)
			// 	return done(null, false, req.flash('loginMessage', 'No User Found'));

			if (password != "m")
				return done(null, false, req.flash('loginMessage', 'Wrong password.'));

			var user = {
				"email": email,
				"password": password
			};
			return done(null, user);
	}));
};
