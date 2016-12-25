var app = require('express')();
var http = require('http').Server(app);
app.get('/', function(req, res){
  res.send(`hello ${process.env.NODE_ENV}!`)
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
