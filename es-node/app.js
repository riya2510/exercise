const express = require('express');
const app =express();
const elasticsearch = require('elasticsearch');
const bodyparser = require('body-parser');
const path= require('path');
const data = require('./routes/document');
const client = new elasticsearch.Client({
    hosts: [ 'http://localhost:9200']
});

client.ping({
    requestTimeout: 30000,
    }, function(error) {
        if (error) {
            console.error('elasticsearch cluster is down!');
        } else {
            console.log('Everything is ok');
        }
    }
);

app.use(bodyparser.json())
app.use( express.static( path.join( __dirname, 'public' )));
app.use('/',data);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app .listen( 3000, function(){
    console.log( 'Express server listening on port 3000');
});

module.exports = app;
