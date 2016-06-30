'use strict'
var express = require('express');
var path = require('path');

var app = express();
var port = 5555;


app.use(express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'html');
app.set('views', './')
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port);

console.log('server is up and running at port : ' + port);
