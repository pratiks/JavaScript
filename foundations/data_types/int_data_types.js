/* Primitive data types:
 INT
 INTRO TO FUNCTIONS IN PROGRAMMING
 */


// INT ( NUMBER TYPE )
// NEED TO LEARN SCALE: 1-5: 5

var myint = 4;
console.log(typeof(myint));
var negative_int = -4;
console.log(typeof(negative_int));

var array_of_ints = [ 3,17,8,-20,0,30,2,9 ];

// CALLING A FUNCTION TO GET A SUM OF INTEGERS
var result = sum_of_integers(array_of_ints);
console.log(result);


// INTRO TO FUNCTIONS
// WHAT ARE FUNCTIONS? a programmers way of being lazy. Anytime you have work that needs to be more than once, write a function to do it for you!
// QUESTIONS: whats the length of our array? How many times will the loop iterate?  Whats the value of total everytime it iterates?
// NEED TO LEARN SCALE: 1-5: 5
function  sum_of_integers(array_of_integers){

    var total = 0;

    for(var i=0; i<array_of_integers.length; i++){

        total += array_of_integers[i];

    }

    return total;

}