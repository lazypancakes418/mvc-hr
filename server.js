var express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(__dirname + '\\client'))
require('./server/config/routes.js')(app, express);
console.log('server is listening on port 8080')
app.listen(8000);
