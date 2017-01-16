var express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express();

//app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(__dirname + '\\client'))

console.log('server is listening on port 8000')
app.listen(8000);
