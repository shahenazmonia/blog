var fs = require('fs');
module.export = {
'GET /' : require('./app/root.js'),
'GET /' : require('./app/writesheet.js'),
'GET /' : require('./app/readsheet.js'),
'GET /style.css':function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./front-end/style.css', {encoding: 'utf8'});
    res.write(fileContents);
    res.end();
  }
}
