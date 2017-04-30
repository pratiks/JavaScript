/*

In this example: For Loops, Variables, Arrays, If-Then and How to return objects.

 */






// Our list of emails to pass to function
var emails = ["pratik.shah@gmail.com", "pratik.shahgmail.com", "fabmingus@yahoo.com", "invalidyahoo.com"];



/* 
 This function will check if an email is valid simply by checking
 if the @ sign exists in the email string.
 */


function checkEmailIsValid(email_array) {

    /*

     initialize two arrays that will store valid and invalid emails.
     These two arrays are only good for the scope of the function.
     */
    var valid_emails = [];
    var invalid_emails = [];

    for (var i=0; i<email_array.length; i++){

        //console.log("Checking if email " + email_array[i] + " is valid..");

        //check if email contains @ sign
        // we use a built-in string method/ function here.
        if (email_array[i].includes("@"))
        {
            //if it does, push that email address to the valid_emails array
            valid_emails.push(email_array[i]);
        }
        else
        {
            invalid_emails.push(email_array[i]);
        }
    }

    /* we return an object wit the following keys.  The value of the keys are the two arrays we created in the
    function. */

    return {"invalid_emails": invalid_emails, "valid_emails": valid_emails};

}


/* Functions are Callable.  We call it here and pass in our global variable
 defined at the top called emails
 */

my_valid_emails = checkEmailIsValid(emails);
console.log(my_valid_emails);