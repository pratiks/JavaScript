/*
 Primitive data types

STRINGS
STRING MANIPULATION
CONCATENATE STRINGS

 */

// NEED TO MASTER SCALE: 1-5:  5

var mystring = "Ramiro";
var numberstring = "1";   /*  THIS IS NOT AN INT */
var boolstring = "bool";  /* THIS IS NOT A BOOL */

console.log(typeof(mystring));
console.log(typeof(numberstring));
console.log(typeof(boolstring));


/* STRING MANIPULATION */

// USING STRINGS BUILT-IN FUNCTIONS< CHANGES YOU MAKE STRINGS AKA STRING MANIPULATION:
// THIS IS USED VERY OFTEN TO UPDATE INFORMATION OR PASS NEW STRINGS INTO FUNCTIONS OR TO A DATABASE
// NEED TO LEARN SCALE: 1-5: 3

var name = "ramiro";

/* change ramiro to primero */
var changename = name.replace("rami", "prime");
console.log(changename);

/* remove last three characters of the name */

var remove_chars = name.replace("iro", "");
console.log(remove_chars);


/* UPPERCASE string */

var uppercase = name.toUpperCase();
console.log(uppercase);

/* LOWERCASE string */
var lowercase = uppercase.toLowerCase();
console.log(lowercase);


/* STRING SPLITTING VERY IMPORTANT  */
// SPLIT FIRST AND LAST NAME
var new_string_to_split = "Ramiro Castro";
var fname_lname = new_string_to_split.split(" ");
console.log(fname_lname);

/* Remove white spaces */
var spaces = "       Ramiro Castro                     ";
var remove_spaces = spaces.trim();
console.log(remove_spaces);

/* string concatenation */

var fname = "ramiro";
var lname = "castro";

var fullname = fname + " " + lname;
console.log(fullname);