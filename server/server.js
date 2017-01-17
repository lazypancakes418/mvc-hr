var express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express();
var path = require('path');

//app.use(morgan('dev'))
app.use(bodyParser.json())
console.log(path.join(__dirname, '../client'))
app.use(express.static(path.join(__dirname , '../client')))
require('./config/routes.js')(app, express);
console.log('server is listening on port 8000')
app.listen(8000);
