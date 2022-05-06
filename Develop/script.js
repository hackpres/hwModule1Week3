// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("The button has been clicked");

  //prompt the user for password criteria
    //length 8-128
  passwordLength = prompt("How long would you like for your password to be?");
    //include lowercase, uppercase, numeric, special characters?
  passwordLowercase = confirm("Would you like for your password to include lowercase letters?");
  passwordUppercase = confirm("Would you like for your password to include uppercase letters?");
  passwordNumbers = confirm("Would you like for your password to include numbers?");
  passwordSpecial = confirm("Would you like for your password to include special characters?");
  //validate the input
  //generate password


  //display password on page
  return 
}

// Write password to the #password input
function writePassword() {
  // Calls the function of generatePassword and assigns the returned value to the variable password.
  // IMPORTANT: the function of generatePassword is being called here but it doesnt yet exist
  var password = generatePassword();
  // assigns the html id="password" to the variable passwordText.
  var passwordText = document.querySelector("#password");

  // assigns the value of passwordText (the html location of id=password) and gives it the value of the function generatePassword()
  // in other words this is what actually displays the text of the generated password in the password box on the card.
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
