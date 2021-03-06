// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!@#$%^&*_-+=";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passLength = prompt("Please enter your password length between 8 and 128 characters:", 0);
  if (passLength >= 8 && passLength <= 128) {
    text = "You selected " + passLength + " as your password length!";
  }

  // document.getElementById("generate").innerHTML = text;

  let lowercase = confirm("Do you want your password to have lowercase?");
  let uppercase = confirm("Do you want your password to have uppercase?");
  let numeric = confirm("Do you want your password to have numbers?");
  let specialcharacter = confirm("Do you want your password to have special characters?");
  //let options = {lowercase: lowercase, uppercase: uppercase, numeric: numeric, specialcharacter: specialcharacter};
  //let confirmcheck = confirm("Do you want your password to have lowercase?");
  //console.log(confirmcheck);
  //what confirm returns as a default

  var pass=" " ;
  console.log("Choices", lowercase, uppercase, numeric, specialcharacter, passLength);


  for (let i = 0; i < passLength; i++) {
    // pass += characters.charAt(
    //   Math.floor(Math.random() * characters.length)
    // )
    if (lowercase === true) {
      //generate random lowercase letter 
      pass += lowerAlpha.charAt(Math.floor(Math.random() * lowerAlpha.length));
    }

    if (uppercase === true) {
      //generate random uppercase letter
      pass += upperAlpha.charAt(Math.floor(Math.random() * upperAlpha.length));
    }
    if (specialcharacter === true) {
      pass += specials.charAt(Math.floor(Math.random() * specials.length));
    }
    if(numeric === true) {
      pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    console.log(pass, i);
  }

  return pass.substring(0, passLength);
}

//create a variable to store the info for the password as string or array

//prompt the user for password length

//check that value is a number, 8 until 128 characters
//use confirm to see whether or not they want lowercase, uppercase, numeric, and/or special characters 
//check if user already picked at least 1 type.
//return the password

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page