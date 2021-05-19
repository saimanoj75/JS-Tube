// Allow user to access course if he is:
// Logged in from is Email
// logged in from google
// logged in from facebook

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login Sucessfull");
}