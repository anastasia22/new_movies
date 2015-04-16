'use strict'
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
var port = 5555;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', function(req, res){
  res.render('index');
});



app.listen(port);

console.log('Server is Up and Running at Port : ' + port);