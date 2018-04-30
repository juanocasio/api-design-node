// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const path = require ('path');
const app = express();
const jsonData = {count: 12, message: 'hey'};
const port = 8080;
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res){
  res.json(jsonData);
});

app.listen (port, function() {
  console.log('Listening on port: ', port);
});
