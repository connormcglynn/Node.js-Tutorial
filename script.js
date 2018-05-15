// TUTORIAL 7 ↓ //

// Module patterns

var stuff = require('./stuff');

console.log(stuff.counter(['Connor', 'Beardsley', 'McGlynn']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));

// TUTORIAL 6 ↓ //

// Modules & require()

// var counter = require('./count');

// console.log(counter(['Connor', 'Beardsley', 'McGlynn']));

// TUTORIAL 5 ↓ //

// Function Expressions

// var sayBye = function(){
//     console.log("bye");
// };

// sayBye();

// TUTORIALS 1-4 ↓ //

// Directory name and File name

// console.log(__dirname + " & " + __filename);

// 2 second timer

// var time = 0;

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + " seconds have passed");
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);
