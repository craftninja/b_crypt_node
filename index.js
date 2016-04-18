var bcrypt = require('bcrypt');

var pw = 'B4c0/\/';
// var storedHash;
var storedHash = "$2a$10$4/5H4r1se8NCrPDX5Ey9S.J73ScAAF/t.G4hpyZJe7F9ba7UY04Zu";
// var storedHash = "$2a$09$hK9vFqya.CId9QJ7Atu.bug2E/JQyoB2fHXIJEo3S5R0isymsesRm";
// var storedHash = "$2a$10$ts3jWQ2oVZe0fFoY2ZF6qeElQMcElJWGqgiWmqZzY.OqfifrKQS8e";
// var storedHash = "$2a$09$I28JRb7AvjQpGC5n6FM4QeVIoPDjxN9UVXWKuJFIln952ZPJ8ZvWC";
// var storedHash = "$2a$10$rG4.97KlYTNK.kLhLBOx8utYsPUwsnd/FZ7HQDCi8/qbgWM0z0vHS";

// bcrypt.genSalt(10, function(err, salt) {
//   bcrypt.hash(pw, salt, function(err, hash) {
//     storedHash = hash;
//     console.log("Password:", pw);
//     console.log("passed in number = 10");
//     console.log("salt length      = " + salt.length);
//     console.log("Salt:    ", salt);
//     console.log("Hash:    ", hash);
//   });
// });

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
