function parseBody(req, callback) {
    var body = '';
    req.on('data', function(data) {
        body += data;
    });
    // req.on('end', function() {
    // 	var id1 = JSON.stringify(id);
    //     var body1 = qs.parse(body);
    //
    // });
}
