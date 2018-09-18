let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let fs = require('fs');
let passport = require('passport');
let cookieparser = require('cookie-parser');
let app = express();
let methodOverride = require("method-override")
let morgan = require("morgan")
let userRoutes = require("./route/user-route");
let session = require("cookie-session");
let flash = require("connect-flash")
let authMiddleware = require("./middleware/auth")
let db = require("./model/user-model");
let GithubStrategy = require('passport-github2').Strategy;


app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./route/user-route")(passport);

app.get("/", function(req,res){
  res.redirect("/auth/github");
});

app.get("/welcome", function(req,res){
  res.send('Logged In!')
});

app.get('/auth/github',
    passport.authenticate('github'),
    function(req, res){}
);

app.get('/auth/github/callback',
  passport.authenticate('github', {
      successRedirect: '/welcome',
      failureRedirect: '/' 
  }),
  function(req, res) {
    res.redirect("/welcome");
  }

);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get('/logout', function(req,res){
    req.logout()
    res.send('logged out!')
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});