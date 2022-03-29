const http = require('http')
const fs = require('fs')
var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3333);
console.log('Now the server is running in url: http://127.0.0.1:3333');