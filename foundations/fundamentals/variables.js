/*

 Understanding Variables:

 * Variables are storage containers.
 * Variables are to the left of the equal operator.
 * Variables can change over time.
 When we need them: In functions, classes, saving responses from APIs,  etc.
 Why we need them: For Storage. For Organization.

 You should learn how to:

 - Initialize a variable
 - Assign a varible a value
 - Re-initialize a variable
 - Passing a variable to another variable
 - A constant vs. variable



 */


/*


 Initialization of a variable

 When you first define your variable, it is called initialzation.
 It can be empty or it can be a value.On the left is the variable, on the right is the value.  You are basically putting the value inside of the variable named
 band.

 NOTE: In javascript and python you do not need to DECLARE a variable.  That is, you don't need to tell the engine what TYPE of value you are storing.
 In Java and C++ you MUST tell the compiler what type of value ( string, array, etc) is being stored.
 */

var band = 'Alice in Chains';
console.log("My band variable is called: " + band);


/* We assigned a variable to another variable */
var band_of_the_nineties;
band_of_the_nineties = band;
console.log("The band of the nineties variable was saved as another variable, so the value is now the same: " + band_of_the_nineties);

/* We "Reinitalized" a variable This means we cleared its value in the example below made it an empty string. */
band = "";

/* We "Reinitalized" a variable What if you wanted an empty array? */
band = [];
console.log("I re-initialized my band to an Array: ");
console.log(band);

/* Saving Band Variable As a JSON Object */
band = {
    name : 'Alice in Chains',
    decade : '90s'
}
console.log(band);

/* What is a constant variable ?

 If variables are values that can change, constant variables are the opposite, they CANNOT change one they have been defined. The example
 below will be initialized as 'Filter', then we attempt to change it.  Run the file to see the output. Notice how it did not change the value of 'my_band.

 */
const my_band = 'Filter';
console.log(my_band);

// Can you see why we got an error here?
my_band = "Metallica";
console.log(my_band);




// FINAL THOUGHTS:  variable naming is important, its super critical! This is our developers understand the context of your program, use it help others read your code, DONT JUST NAME THINGS.