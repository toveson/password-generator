// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?")
  console.log(passwordLength);
  
  if (passwordLength > 8) {
    var passwordSymbol = confirm("Would you like symbols in your password?")
    console.log(passwordSymbol);
    var passwordNumber = confirm("Would you like numbers in your password?")
    console.log(passwordNumber);
    var littleLetter = confirm("Would you like lowercase letters in your password?")
    console.log(littleLetter);
    var bigLetters = confirm("Would you like uppercase letters in your password?")
    console.log(bigLetters);
  }

  else {
    alert ("Password must be between 8 and 100 characters!")
  }
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











