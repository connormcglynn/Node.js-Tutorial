// TUTORIAL 12 ↓ //

// Creating a server //

var http = require("http");

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Hey, now listening to port 3000');

// TUTORIAL 11 ↓ //

// Clients & Servers //
// Protocols: A set of communications rules, that two sides agree to use when communicating 
// Sockets: A channel through which information can be sent between a client and a server (via IPs)
// Packets: A layer 3 protocol data unit, or a piece of data associated with the network layer
// Ports: A program running on a computer can listen for requests sent to a particular port number

// TCP: Transmission Control Protocol
// FTP: File Transfer Protocol
// HTTP: Hypertext Transfer Protocol




// TUTORIAL 10 ↓ //

// Creating & Removing Directories //

// var fs = require("fs");

// // fs.mkdir('Stuff', function(){ // uses mkdir to make new directory called Stuff
// //     fs.readFile('README.md', 'utf8', function(err, data){
// //         fs.writeFileSync('./Stuff/WRITEME.md', data);
// //     });
// // }); 

// fs.unlink('./Stuff/WRITEME.md', function(){
//     fs.rmdir('Stuff'); // removes directory
// });


// TUTORIAL 9 ↓ //

// Reading & Writing Files //

// var fs = require('fs');

// fs.readFile('README.md', 'utf8', function(err, data){
//     fs.writeFileSync('WRITEME.md', data);
// });

// TUTORIAL 8 ↓ //

// The Node Event Emitter Module //

// var events = require('events');
// var util = require('util');

// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person ('james');
// var mary = new Person ('mary');
// var ryan = new Person ('ryan');
// var people = [james, mary, ryan];

// people.forEach(function(person){
//   person.on('speak', function(mssg){
//       console.log(person.name + ' said: ' + mssg);
//   }); 
// });

// james.emit('speak', 'Hey, dudes!');
// ryan.emit('speak', "What's up homie?");
// mary.emit('speak', 'Watch your microaggressions, boys...');

// TUTORIAL 7 ↓ //

// Module patterns //

// var stuff = require('./stuff');

// console.log(stuff.counter(['Connor', 'Beardsley', 'McGlynn']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// TUTORIAL 6 ↓ //

// Modules & require() //

// var counter = require('./count');

// console.log(counter(['Connor', 'Beardsley', 'McGlynn']));

// TUTORIAL 5 ↓ //

// Function Expressions //

// var sayBye = function(){
//     console.log("bye");
// };

// sayBye();

// TUTORIALS 1-4 ↓ //

// Directory name and File name //

// console.log(__dirname + " & " + __filename);

// 2 second timer //

// var time = 0;

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + " seconds have passed");
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);
