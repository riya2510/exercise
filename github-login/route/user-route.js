let express = require("express");
let router = express.Router();
let passport = require('passport');
let User           = require('../model/user-model');
let githubStrategy = require('passport-github').Strategy;
let configAuth     = require('../middleware/auth.js');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        })
    });

    passport.use('github',new githubStrategy({
        clientID: "65e81617ec773e7694f9",
        clientSecret: "955977c7f6211ec49fb3677449f5ecc058d8631f",
        scope: ['user:email'],
  		callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(token, refreshToken, profile, done) {

        process.nextTick(function() {
            console.log('token ',token);
            User.findOne({ 'github.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);
                if (user) {

                    user.github.id    = profile.id;
                    user.github.token = token;
                    user.github.name  = profile.displayName;
                    user.github.email = profile.emails[0].value;
                    return done(null, user);

                }
            });
        });

    }));

};
