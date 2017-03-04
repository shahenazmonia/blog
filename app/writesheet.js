var google = require('googleapis');
var key = require('../key.json');
var https = require('https');


var source = {
    "range": "O2facebook",
    "majorDimension": "ROWS",
    "values": [
      ["shahenaz","pass"]
        // [fbid, key]
        // [body1.username, body1.phone,body1.key]
    ]
}

console.log(source.values);
// console.log(JSON.parse(Object.keys(source.values[0])));

function writesheet(cb) {
    var jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
        null
    );

    var SHEET_ID = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';
    jwtClient.authorize((err, tokens) => {
        if (err) {
            console.log(err);
            return;
        }
        var opts = {
            hostname: 'sheets.googleapis.com',
            port: 443,
            path: `/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokens.access_token}`
            }
        };
        var req = https.request(opts, (res) => {});
        req.write(source);
        console.log(source);
        req.end();
    });
}

// writesheet(function(undefined,data){
//   console.log(data);
// });

// module.export = {
//   writesheet ()
// };
