// TUTORIAL 24 & 25 & 26 & 27 ↓ //

// Route Parameters / Templating Engines (Parts 1 & 2) / Partial Templates

var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

// TUTORIAL 23 ↓ //

// Introduction to Express
    // Easy and flexible routing system
    // Integrates with many templating engines
    // Contains a middleware framework
        // Middleware: acts as a bridge between a database/OS and applications, especially on a network.
    // HTTP Methods: 
        // GET, POST, DELETE, PUT

// var express = require("express");

// var app = express();

// app.get('/', function(req, res){
//     res.send('this is the homepage');
// });

// app.get('/contact', function(req, res){
//     res.send('this is the contact page');
// });

// app.listen(3000);



// TUTORIAL 20 & 21 & 22 ↓ //

// Node Package Manager (npm) / Package.JSON / Nodemon //
// Installed express
// Installed nodemon

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url);
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if (req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if (req.url === '/api') {
//         var api = [{
//             name: 'Ryu',
//             age: 29
//         },
//             {
//             name: 'Yoshi',
//             age: 32
//             }];
//         res.writeHead(200, {'Content-Type': 'application/JSON'});
//         res.end(JSON.stringify(api));
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey, now listening to port 3000');

// TUTORIAL 19 ↓ //

// Basic Routing //

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url);
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if (req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if (req.url === '/api') {
//         var api = [{
//             name: 'Ryu',
//             age: 29
//         },
//             {
//             name: 'Yoshi',
//             age: 32
//             }];
//         res.writeHead(200, {'Content-Type': 'application/JSON'});
//         res.end(JSON.stringify(api));
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey, now listening to port 3000');

// // TUTORIAL 18 ↓ //

// // Serving JSON //

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/JSON'});
//     var myObj = {
//         name: 'Ryu',
//         job: 'Ninja',
//         age: 29
//     };
//     res.end(JSON.stringify(myObj));
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey, now listening to port 3000');

// TUTORIAL 17 ↓ //

// Serving HTML Pages //

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey, now listening to port 3000');

// TUTORIAL 16 ↓ //

// Pipes //

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var myReadStream = fs.createReadStream(__dirname + '/loremipsum.txt', 'utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey, now listening to port 3000');

// TUTORIAL 15 ↓ //

// Writable Streams //
   
// var http = require("http");
// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + '/loremipsum.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', function(chunk){
//   console.log('new chunk received');
//   myWriteStream.write(chunk, 'utf8');
// });

// TUTORIAL 14 ↓ //

// Readable Streams //
    // Duplex: can write and read to a stream
    
// var http = require("http");
// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + '/loremipsum.txt', 'utf8');

// myReadStream.on('data', function(chunk){
//   console.log('new chunk received');
//   console.log(chunk);
// });

// console.log(myReadStream);



// TUTORIAL 13 ↓ //

// Streams & Buffers //

// Buffer: A temporary storage spot for a chunk of data that is being transferred from one place to another
    // The buffer is filled with data, then passed along
    // Transfers small chunks of data at a time
    
// Stream: A stream represents a sequence of objects (usually bytes, but not necessarily so), which can be accessed in sequential order. Typical operations on a stream:
    // Read one byte. Next time you read, you'll get the next byte, and so on
    // Read several bytes from the stream into an array
    // Seek (move your current position in the stream, so that next time you read you get bytes from the new position)
    // Write one byte
    // Write several bytes from an array into the stream
    // Skip bytes from the stream (this is like read, but you ignore the data. Or if you prefer it's like seek but can only go forwards)
    // Push back bytes into an input stream (this is like "undo" for read - you shove a few bytes back up the stream, so that next time you read that's what you'll see. 
        // It's occasionally useful for parsers, as is:
            // Peek (look at bytes without reading them, so that they're still there in the stream to be read later)
            
// Streams in Node.js
    // Can create streams in Node.js to transfer data
    // Used to increase application performance 


// TUTORIAL 12 ↓ //

// Creating a server //

// var http = require("http");

// var server = http.createServer(function(req, res){
//     console.log('Request was made: ' + req.url)
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey ninjas');
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey, now listening to port 3000');

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
