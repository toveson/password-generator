// Assignment Code
var generateBtn = document.querySelector("#generate");

// collect user input
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?");
  console.log(passwordLength);
  
  // length
  // (min 8 characters and max of 128)
  if (passwordLength > 7 && passwordLength < 129) {
    // confirm if user wants symbols
    var passwordSymbol = confirm("Would you like symbols in your password?");
    console.log(passwordSymbol);
    // confirm if user wants numbers
    var passwordNumber = confirm("Would you like numbers in your password?");
    console.log(passwordNumber);
    // confirm if user wants lowercase letters
    var littleLetter = confirm("Would you like lowercase letters in your password?");
    console.log(littleLetter);
    // confirm if user wants uppercase letters
    var bigLetters = confirm("Would you like uppercase letters in your password?");
    console.log(bigLetters);
  }
    //check password length
  else {
    alert ("Password must be between 8 and 128 characters!")
  }
  // atleast one type of charater must be true, if not alert must choose atleast one character type
  if (passwordSymbol || passwordNumber || littleLetter || bigLetters) {
    alert("Your password will now be generated!")
  }
  
  else {
    alert("must choose atleast one character type")
  }

  
  // *array of a-z in lowercase
  var smallAlphabet = ["abcdefghijklmnopqrstuvwxyz".split("")];
  console.log(smallAlphabet);
  
  
  // *array of a-z in uppercase
  var largeAlphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  // var largeAlphabet = smallAlphabet.toUpperCase();
  console.log(largeAlphabet)
  
  
  
  // *array of symbols
  var symbols = ["!@#$%^&*()_-+={[}};:<>,.?/|".split("")];
  console.log(symbols);
  
  
  
  // *array of 0-9
  var numbers = ["0123456789".split("")];
  console.log(numbers);
  
  //begin building password

  

  
  
}


// console.log(generatePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











