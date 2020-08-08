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
    alert("Password must be between 8 and 128 characters!")
  }
  // atleast one type of charater must be true, if not alert must choose atleast one character type
  if (passwordSymbol || passwordNumber || littleLetter || bigLetters) {
    alert("Your password will now be generated!");
  }

  else {
    alert("must choose atleast one character type");
  }


  // *array of a-z in lowercase
  let smallAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


  // *array of a-z in uppercase
  let largeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // *array of symbols
  let symbols = "!@#$%^&*()_-+={[]}|\,.?/<>".split("");

  // *array of 0-9
  let numbers = "0123456789".split("");

  // math.random and number.floor I think?
  // only from true charcter types
  // console.log("---randomSmall---")
  let randomSmall = smallAlphabet[Math.floor(Math.random() * smallAlphabet.length)];
  // console.log(randomSmall)

  // console.log("---randomBig---")
  let randomBig = largeAlphabet[Math.floor(Math.random() * largeAlphabet.length)];
  // console.log(randomBig);


  // console.log("---randomSymbol---")
  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  // console.log(randomSymbol)

  // console.log("---randomNumbers---")
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  // console.log(randomNumber);


  let characters = [randomSmall, randomBig, randomSymbol, randomNumber]
  console.log(characters);




  //begin building password
  // use a loop and run it passwordlength

  for (let i = 0; i < passwordLength; i++) {
    // loop should make one character at a time
    console.log(randomChars)
    // charcter should be pulled from random______ one at a time
    // should only pull from true user choices

  }



}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
