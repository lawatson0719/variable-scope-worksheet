//Exercise 1.1:

// While looping through the first time works, the second time, however , does not give you the expected outcome.  When the first loop is run, it makes changes to the global variable a, which now equals 9, and applys it to the function.  In order to make this work, I removed all references to a inside the function and returned the vaule of x;

// var a = 2;

// function pow (x, n) {
//     for (var i = 1; i < n; i++) {
//         result *= x;
//     }
//     return x;
// }


// pow(3, a);
// pow(2, a);





//Exercise 1.2:

// var i = 0;

// var logNTimes = function (str, n) {
// 	// since var is not in front of this assignment statement, we now have two global i variables that equal 0. This needs to be changed to anything but i. ie var j = 0.
//     j = 0;
//     // (i < n) === (j < n)
//     while (j < n) {
//         console.log(str);
//         // i++ === j++;
//         j++;
//     }
// };

// while (i < 3) {

//     logNTimes('Work', 2);
//     i++;
// }


//Exercise 1.3:



// (function () {
//     var url = 'http://openweathermap.com/api/'
//     var apiKey = '1ab2-01bd45-30dab-22232';

//     function request (path, method) {

//     // This assignment statement needs to be changed to anything but url.
//         j = url + path + apiKey;
//         return http.requestSync(url, method);
//     }
   
//     var users = request('/users', 'GET');
//     // when this function is run, the first var users runs just fine, but when var cities is run, the url is 'http://openweathermap.com/api/users. we want the url to be set back to the original url every time the function is run.  
//     var cities = request('/cities', 'GET');
// })();



//Exercise 1.4:



// var b;

// (function() {
//    var a = 5;
// 	  var b = 5;
//    // since b is not truly reassigned (aka: b is now a leaky variable) inside this function it now overrides the gobal variable of var b;(undefined). b now = 5.  If you were to simply put var in front of 'b = 5', then b would be undefined.
// })();

// console.assert(b === undefined);



//Part 2:

var x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) {// 2 -> c === (8,9,10)
    var x = 10;// 3

    console.log(x);// 4 -> x === 10
    console.log(a);// 5 -> a === 8

    var f = function (a, b, c) { // 7 f === (8, 9, 10)
        var x = 5; // 8 
        b = a;// 8 -> b === 8
        console.log(b); // 9 -> print out b (8)
        b = c; // 10 -> b === 10
    }

    f(a, b, c); // 6 -> this is passed into the f function f(8, 9, 10)

    console.log(b);// 11 -> print out b (10)
 }

c(8, 9, 10);// 1 -> this is passed into the c function














