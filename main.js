//alphanumerical set
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*.()";

// access document object 
const showBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbol");

// random index generator
const randomIndex = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

let passwordText;
// password generator function
const generatePassword = (password = " ") => {
  
  if(upperCase.checked) {
    password += randomIndex(upperSet);
  }
  
  if(lowerCase.checked) {
    password += randomIndex(lowerSet);
  }
  
  if(numbers.checked) {
    password += randomIndex(numberSet);
  }
  
  if(symbol.checked) {
    password += randomIndex(symbolSet);
  }
  
  
  if(password.length < totalChar.value) {
    return generatePassword(password);
  }
  
  showBox.innerHTML = truncateString(password,totalChar.value);
  passwordText = truncateString(password,totalChar.value);
  
}

function generateButton() {
  generatePassword();
}

// password size manager
function truncateString(str,num) {
  if(str.length > num) {
    let substr = str.substring(0,num);
    return substr;
  }else {
    return str;
  }
}

function copy() {
  navigator.clipboard.writeText(passwordText);
  alert("Password Copy    " + passwordText);
  console.log(passwordText);
}
/*
// another function
function generatePassword2(length) {
  let password = "";
  let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-=?@";

  for (let i = 0; i < length; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  return password;
}

console.log(generatePassword2(12));

*/