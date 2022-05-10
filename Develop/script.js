// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //console logs confirmation that the generate password button was clicked
  console.log("The button has been clicked");

  //prompt the user for password criteria
    //length 8-128
  passwordLength = prompt("How long would you like for your password to be?");
    //include lowercase, uppercase, numeric, special characters?
  passwordLowercase = confirm("Would you like for your password to include lowercase letters?");
  passwordUppercase = confirm("Would you like for your password to include uppercase letters?");
  passwordNumbers = confirm("Would you like for your password to include numbers?");
  passwordSpecial = confirm("Would you like for your password to include special characters?");
  //validates the input for password length. If it is less than 8, greater than 128, or not a number follow the next line
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    //if the while loop returns true, prompt "please type a number between 8-128."
    passwordLength = prompt("please type a number between 8-128.");
  }
  //add charCodes from ASCii Table to their respective lower, upper, number, special variables.
  const uppercase_codes = arrayFromLowToHigh(65, 90);
  const lowercase_codes = arrayFromLowToHigh(97, 122);
  const number_codes = arrayFromLowToHigh(48, 57);
  const special_codes = arrayFromLowToHigh(33, 47) 
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));
    //add function for arrayFromLowToHigh that defines array as an empty array, then sets i to low (33) and increments till i is equal to high (126), with each incrementation the function also pushes i into array.
    function arrayFromLowToHigh(low, high) {
      const array = [];
      for (let i = low; i <+ high; i++) {
        array.push(i);
      }
      return array;
    }
  //generate password
  // sets a variable characterCodes to an empty array
  let characterCodes = [];
  //if the user confirmed passwordLowercase than characterCodes willl be given the value of itself + the value of lowercase_codes
  if (passwordLowercase) characterCodes = characterCodes.concat(lowercase_codes);
  //if the user confirmed passwordUppercase than the characterCodes will be given the value of itself + the value of uppercase_codes
  if (passwordUppercase) characterCodes = characterCodes.concat(uppercase_codes);
  //if the user confirmed passwordUppercase than the characterCodes will be given the value of itself + the value of number_codes
  if (passwordNumbers) characterCodes = characterCodes.concat(number_codes);
  //if the user confirmed passwordUppercase than the characterCodes will be given the value of itself + the value of special_codes
  if (passwordSpecial) characterCodes = characterCodes.concat(special_codes);
  //log the value of characterCodes to the console so that I can observe that it matches what the user confirmed
  console.log(characterCodes);

  //sets a variable passwordCharacters to an empty array
  const passwordCharacters = [];
  //opens a for loop that increments i from 0 till it is less than the passwordLength
  for (let i = 0; i < passwordLength; i++) {
    //defines a constant variable called characterCode and makes it equal to the value of the next line
    const characterCode =
      //sets the value of characterCode to an array of characterCodes.
        //since Math.floor is used to remove decimals by returning the largest interger less than or equal to the given number we will wrap our Math.random generation inside so that we only return whole numbers.
        //Math.random * characterCodes.length will generate any number between 0 and the array of characterCodes (which was set by the users confirmation prompts).
      characterCodes[Math.floor(Math.random() * characterCodes.length)];
    //this line pushes the array of passwordCharacters into a string using the .fromCharCode so that we are left with a string of characters rather than an array of those characters codes.
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  console.log(passwordCharacters);
  //returns the passwordCharacters string out of the generatePassword execution context while joining the individual characters into a single string.
  return passwordCharacters.join("");
}

// Write password to the #password input
function writePassword() {
  // Calls the function of generatePassword and assigns the returned value to the variable password.
  var password = generatePassword();
  // assigns the html id="password" to the variable passwordText.
  var passwordText = document.querySelector("#password");

  // assigns the value of passwordText (the html location of id=password) and gives it the value of the function generatePassword()
  // in other words this is what actually displays the text of the generated password in the password box on the card.
  passwordText.value = password;

}

// Add event listener to generate button and open an execution context for writePassword()
generateBtn.addEventListener("click", writePassword);