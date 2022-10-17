// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  passwordLength: 0,
  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", 
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  passwordNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  passwordSpecialCharacters:  [" ", "!", "#", "$", "%", "&", "'", "()", "*", "+", "-", ".", "/", ":", ";",
  "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~"]
}

// Write password to the #password input on index.html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var result = "";
    var Length = 0;
    var upperCase;
    var lowerCase;
    var numbers;
    var specialCharacters;
  
    length = 0;
    passwordCriteria.passwordLength = 0;
    result = "";
 


  while (Length < 8 || Length > 128) {
    Length = prompt("Choose how many characters you want in your password. Password must be between 8 and 128 characters.");

    
    if (Length === null) {
      return ("Your secure password");
    }
    else {
      if (!isFinite(Length)) {
        window.alert("You did not enter a number");
        return ("Your secure password");
      }
      else {
        if (Length < 8 || Length > 128) {
          window.alert("Your password must be between 8 and 128 characters");
          return ("Your secure password");
        }
        else {
            showCriteria();

         
          while (passwordCriteria.passwordLength < Length) {
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              window.alert("You must select at least one of the criteria");
              showCriteria();
            }
            else {
              
              if (lowerCase === true && passwordCriteria.passwordLength < Length) {
                var lC = passwordCriteria.passwordLowerCase[Math.floor(Math.random() * 26)]
                result = result + lC;
                passwordCriteria.passwordLength++;
              }

                          
              if (specialCharacters === true && passwordCriteria.passwordLength < Length) {
                var sC = passwordCriteria.passwordSpecialCharacters[Math.floor(Math.random() * 30)]
                result = result + sC;
                passwordCriteria.passwordLength++;
              }

             
              if (upperCase === true && passwordCriteria.passwordLength < Length) {
                var uC = passwordCriteria.passwordUpperCase[Math.floor(Math.random() * 26)]
                result = result + uC;
                passwordCriteria.passwordLength++;
              }

              
              if (numbers === true && passwordCriteria.passwordLength < Length) {
                var numeric = passwordCriteria.passwordNumbers[Math.floor(Math.random() * 10)]
                result = result + numeric;
                passwordCriteria.passwordLength++;
              }
            }
          }
        }
      }
    }


    return result;

    
    function showCriteria() {
      lowerCase = confirm("Would you like to use lower case letters?");
      upperCase = confirm("Would you like to use upper case letters?");
      numbers = confirm("Would you like to use numbers?");
      specialCharacters = confirm("Would you like to use special characters?");
    }
  }
}

