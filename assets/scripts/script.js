// Assignment Code
var generateBtn = document.querySelector("#generate");
// *array of symbols
let symbols = "!@#$%^&*()_-+={[]}|,.?/<>".split("");
// *array of 0-9
let numbers = "0123456789".split("");
// *array of a-z in lowercase
let lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
// *array of a-z in uppercase
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


var useSymbol;
var useNumber;
var useLower;
var useUpper;

// collect user input
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?").trim();
  console.log(passwordLength);

  // length
  // (min 8 characters and max of 128)
  if (passwordLength > 7 && passwordLength < 129) {
    // confirm if user wants symbols
    useSymbol = confirm("Would you like symbols in your password?");
    console.log(useSymbol);
    // confirm if user wants numbers   
    useNumber = confirm("Would you like numbers in your password?");
    console.log(useNumber);
    // confirm if user wants lowercase letters
    useLower = confirm("Would you like lowercase letters in your password?");
    console.log(useLower);
    // confirm if user wants uppercase letters
    useUpper = confirm("Would you like uppercase letters in your password?");
    console.log(useUpper);
  }
  //check password length
  else {
    alert("Password must be between 8 and 128 characters!")
  }
  // atleast one type of charater must be true, if not alert must choose atleast one character type
  if (useSymbol || useNumber || useLower || useUpper) {
    alert("Your password will now be generated!");
  }

  else {
    alert("must choose atleast one character type");
  }

  // randomness will be each true user input from loop. 
  //each user input will be stored passwordLength
  // randomness will then be used to make PW 
  var randomness = [];


  //begin building password
  // use a loop and run it passwordlength

  for (let i = 0; i < passwordLength; i++) {
    // get a random symbol if rondomness is less than passWordLength
    if (useSymbol) {
      randomness.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }


    // get a random number if rondomness is less than passWordLength
    if (useNumber) {
      randomness.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    // get a random number if rondomness is less than passWordLength
    if (useLower) {
      randomness.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }

    // uppercase
    // get a random number if rondomness is less than passWordLength
    if (useUpper) {
      randomness.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }

  }
  var builtPW = [];
  console.log(builtPW);
  // loop runs password length that pulls from randomness
  for (let i = 0; i < passwordLength; i++) {

    builtPW.push(randomness[Math.floor(Math.random() * randomness.length)]);
  }

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
