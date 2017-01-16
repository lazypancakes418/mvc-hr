var express = require('express');
var bodyParser = require('body-parser')
var db = requite('./server/db')

var app = express;
app.use(bodyParser.json)
app.use(express.static(__dirname + 'client'))
console.log('server is listening on port 8000')
app.listen(8000);
