
var generateBtn = document.querySelector("#generate");
// Global arrays
let symbols = "!@#$%^&*()_-+={[]}|,.?/<>".split("");
let numbers = "0123456789".split("");
let lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// Global variables
var useSymbol;
var useNumber;
var useLower;
var useUpper;
// collect user input
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?").trim();
  // (min 8 characters and max of 128)
  if (passwordLength > 7 && passwordLength < 129) {
    // confirm if user wants symbols
    useSymbol = confirm("Would you like symbols in your password?");
    // confirm if user wants numbers   
    useNumber = confirm("Would you like numbers in your password?");
    // confirm if user wants lowercase letters
    useLower = confirm("Would you like lowercase letters in your password?");
    // confirm if user wants uppercase letters
    useUpper = confirm("Would you like uppercase letters in your password?");
  }
  //check password length
  else {
    alert("Password must be between 8 and 128 characters!")
    generatePassword();
  }
  // at least one type of character must be true, if not alert must choose at least one character type
  if (useSymbol || useNumber || useLower || useUpper) {
    alert("Your password will now be generated!");
  }
  else {
    alert("must choose at least one character type");
  }
  // array for buildPW from 
  var randomness = [];
  //building randomness array
  for (let i = 0; i < passwordLength; i++) {
    // get a random symbol
    if (useSymbol) {
      randomness.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    // get a random number
    if (useNumber) {
      randomness.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    // get a random lowercase
    if (useLower) {
      randomness.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    // get a random uppercase
    if (useUpper) {
      randomness.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
  }
  var builtPW = [];
  // loop runs password length that pulls from randomness
  for (let i = 0; i < passwordLength; i++) {
    builtPW.push(randomness[Math.floor(Math.random() * randomness.length)]);
  }
  // sends builtPW to generatepassword 
  return builtPW.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);