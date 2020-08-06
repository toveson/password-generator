// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // code to be ran
    console.log(generatePassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// user clicks on a button


// collect user input
// *length
    // *min 8 characters
    // *max 128 characters
// *symbols
    // *array of symbols
// *numbers
    // *array of 0-9
// *uppercase letters
    // *pull array of lowercase numbers and change them to uppercase
// *lowercase letters
    // *array of a-z

// randomize the input order

// select random characters in each category
// * random letters
// * random symbols
// * random numbers

// display on screen