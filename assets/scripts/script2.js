// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// password from 8 through 128 characters

function generatePassword() {
    console.log("start generate password function");

    var passwordLength = prompt("How many characters would you like your password to contain? Please type a value from 8 to 128 characters.")

    while (true) {
        if (passwordLength >= 8 && passwordLength <= 128) {
            console.log("valid password length entered");
            console.log("password length=", (passwordLength), "characters");

            break;
        }
        console.log("invalid password length entered")
        alert("invalid password length entered");
    }


    // var lowercaseChar = Array(65, 90);
    //var uppercaseChar = Array(97, 122);
    //var numericalChar = Array(48, 57);
    //var specialChar = Array(33, 47).concat(
    //      Array(58, 64)
    //      ).concat(
    //       Array(91, 96)
    //     ).concat(
    //       Array(123, 126)
    //     );


    //    b. lowercase, upercase, numbers, special characters
    var includeLowercase  = confirm("Click OK to include lowercase characters")
    // includeLowercase = confirm("Click OK to include lowercase characters")
    var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // if (includeLowercase == true) {
    //     console.log("include lowercase characters");
    // }

    // else {
    //     var lowercaseChar = null
    //     console.log("exclude lowercase characters");

    // }


    var includeUpercase = confirm("Click OK to include upercase characters")
    // includeUpercase = confirm("Click OK to include upercase characters")
    var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // if (includeUpercase == true) {
    //     console.log("include upercase characters")
    // }

    // else {
    //     var uppercaseChar = null
    //     console.log("exclude upercase characters")
    // }

    var includeNumeric = confirm("Click OK to include numeric characters")
    // includeNumeric = confirm("Click OK to include numeric characters")
    var numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // if (includeNumeric == true) {
    //     console.log("include numeric characters")
    // }

    // else {
    //     var numericalChar = null
    //     console.log("exclude numeric characters")
    // }

    var includeSpecial = confirm("Click OK to include special characters")
    // includeSpecial = confirm("Click OK to include special characters")
    var specialChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '[', ']', ';', ',', '.', '/', ',', '+', '|', '?'];

    // if (includeSpecial == true) {
    //     console.log("include special characters")
    // }

    // else {
    //     var specialChar = null
    //     console.log("exclude special characters")
    // }







    // var allChar = lowercaseChar + uppercaseChar + numericalChar + specialChar;
    var randomPasswordArray = [];
  
    for (let i = 0; i < passwordLength; i++) {
        if (includeLowercase) {
            randomPasswordArray.push(lowercaseChar)
        }
        if (includeUpercase) {
            randomPasswordArray.push(uppercaseChar)
        }
        if (includeNumeric) {
            randomPasswordArray.push(numericalChar)
        }
        if (includeSpecial) {
            randomPasswordArray.push(specialChar)
        }
    }
  randomPasswordArray.length = passwordLength;
    // randomPasswordArray[0] = lowercaseChar;
    // randomPasswordArray[1] = uppercaseChar;
    // randomPasswordArray[2] = numericalChar;
    // randomPasswordArray[3] = specialChar;
    // randomPasswordArray = randomPasswordArray.fill(allChar);
    
    
    
    
    
    function shuffleArray(randomPasswordArray) {
        for (var i = passwordLength - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = randomPasswordArray[i];
            randomPasswordArray[i] = randomPasswordArray[j];
            randomPasswordArray[j] = temp;
        }
        console.log(randomPasswordArray)
        return randomPasswordArray;
    }
    
    return shuffleArray(randomPasswordArray.map(function (x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}




// validate input- confirm at least one character type was selected and inform user


// generate the password based on the user-specified parameters



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);