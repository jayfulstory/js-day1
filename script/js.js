console.log("------------問題1----------");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (let greeting of greetings) {
  if (greeting.includes("Christmas")) {
    console.log(greeting);
  }
}

console.log("------------問題2----------");

const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (let city of cities) {
  console.log(changeString(city));
}

function changeString(str) {
  const result = str[0].toUpperCase() + str.toLowerCase().slice(1);
  return result;
}

console.log("------------問題3----------");
