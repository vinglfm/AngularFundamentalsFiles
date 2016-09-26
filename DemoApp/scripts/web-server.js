var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var events = require('./eventsData');

var app = express();
var rootPath = path.normalize(__dirname + '/..');

app.set('port', 8001)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(rootPath + '/app'));

app.listen(app.get('port'), function() {
  console.log('listeting to ', app.get('port'));
});

app.get('/data/events/:id', events.get);

app.post('/data/events/:id', events.post);
