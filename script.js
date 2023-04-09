// Assignment code here
//passwordCharacters contains all the necessary string data to make the password
const passwordCharacters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialCharacters: "!'#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

document.getElementById("generate").addEventListener("click", function () {
  alert(generatePassword);
});

//Starts when button is clicked
let generatePassword = function() {

  //sets initial state of the password to be blank
  let passwordInfo = "";

  //asks the user how long the password should be
  let characterTotal = prompt("How many characters would you like in your password? Must be between 8 and 128");

  //confirms the character length fits the requirements  
  if (characterTotal >= 8 && characterTotal <= 128) {
    
    //asks if user wants numbers in their password
    let getNumbers = window.confirm("Do you want numbers included in the password?");

    //allows numbers to be generated in the password
    if (getNumbers) {
      passwordInfo = passwordInfo + passwordCharacters.numbers;
    };

    //asks if user wants special characters in their password
    let getSpecialCharacters = window.confirm("Do you want special characters in the password?");

    //allows special characters to be generated in the password
    if (getSpecialCharacters) {
      passwordInfo = passwordInfo + passwordCharacters.specialCharacters
    }

    //asks if user wants lowercase letters in their password
    let getLowerCase = window.confirm("Do you want lowercase letters in the password?");

    //allows lowercase letters to be generated in the password
    if (getLowerCase) {
      passwordInfo = passwordInfo +passwordCharacters.lowerCase
    }

    //asks if user wantes uppercase letters in their password
    let getUpperCase = window.confirm("Do you want uppercase letters in the password?");

    //allows uppercase letters to be generated in the password
    if (getUpperCase) {
      passwordInfo = passwordInfo +passwordCharacters.upperCase
    }
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




