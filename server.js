'use strict'
var express = require('express');
var path = require('path');

var app = express();
var port = 5555;


app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port);

console.log('server is up and running at port : ' + port);

