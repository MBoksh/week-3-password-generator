// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  passwordLength: 0,
  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  passwordNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  passwordSpecialCharacters: [" ", "!", "#", "$", "%", "&", "'", "()", "*", "+", "-", ".", "/", ":", ";",
   "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~"]
}

// Write password to the #password input
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


  while (length < 8 || length > 128) {
    length = prompt("Choose how many characters you want in your password. Password must be between 8 and 128 characters.");

    if (length === false) {

    }


  }

}

function showCriteria() {
  lowerCase = confirm("Would like to use lower case letters?");
  upperCase = confirm("Would you like to use upper case letters?");
  numbers = confirm("Would you like to use numbers?");
  specialCharacters = confim("Would you like to use special characters?");

}