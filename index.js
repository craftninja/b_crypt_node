var bcrypt = require('bcrypt');

var pw = 'B4c0/\/';
var storedHash;

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(pw, salt, function(err, hash) {
    storedHash = hash;
    console.log("Password:", pw);
    console.log("passed in number = 10");
    console.log("salt length      = " + salt.length);
    console.log("Salt:    ", salt);
    console.log("Hash:    ", hash);
  });
});

setTimeout(function(){
  bcrypt.compare('B4c0/\/', storedHash, function(err, res) {
    console.log("Checking correct password. Res:");
    console.log(res);
  });
  bcrypt.compare('not_bacon', storedHash, function(err, res) {
    console.log("Checking incorrect password. Res:");
    console.log(res);
  });
}, 1000);
