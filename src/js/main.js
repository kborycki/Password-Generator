const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const pswd = document.querySelector(".password");
const length = document.querySelector(".length");
const btn = document.querySelector(".btn");
const btn_copy = document.querySelector(".btn_copy");
const checkUpperCase = document.querySelector(".uppercase");
const checkLowerCase = document.querySelector(".lowercase");
const checkSpecialCharacters = document.querySelector(".symbols");
const checkNumbers = document.querySelector(".numbers");
let passwordLength;

function getPassowrd() {
  let password = " ";
  const characters = [];

  if (checkUpperCase.checked == true) characters.push(...upperCase);

  if (checkLowerCase.checked == true) characters.push(...lowerCase);

  if (checkSpecialCharacters.checked == true)
    characters.push(...specialCharacters);

  if (checkNumbers.checked == true) characters.push(...numbers);

  for (let i = 0; i < passwordLength; i++) {
    let randomCharacters = Math.floor(Math.random() * characters.length);
    password += characters[randomCharacters];
  }
  pswd.textContent = password;
  console.log(pswd.textContent);
}

function checkLength() {
  passwordLength = length.value;
  if (passwordLength >= 4 && passwordLength <= 30) {
    getPassowrd();
  } else {
    alert("The password must be 4 to 30 characters long");
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(pswd.textContent);
  alert("Password is copied to clipboard");
}

btn.addEventListener("click", checkLength);
btn_copy.addEventListener("click", copyToClipboard);
