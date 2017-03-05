const tape = require('tape');
const shot = require('shot');
const main = require('../main.js');

shot("",function(t){
  t.deepEqual(1,1,"any thing");
  t.end();
});
