var http = require('http');
var mainhandler = require('./main.js');

http.createServer(mainhandler).listen( process.env.PORT || 8080,function(){
  console.log('listen to 8080');
});
