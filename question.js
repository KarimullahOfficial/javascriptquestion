//find currrent date

let mydate = new Date();
console.log(mydate);
console.log("today", mydate.getDay());
console.log("time now", mydate.getTime());

// find curren window
console.log(window);
//find are

let a = 5;
let b = 6;
let c = 7;
s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);
//find automate rotate at right
// function rotate(id)
// {

// }
//find leap year
function leap(year) {
  if (year % 4 == 0) {
    console.log("this is leap year");
  } else {
    console.log("not a leap year");
  }
}
leap(2016);
leap(2024);
leap(2010);
leap(2000);
//find 2024 sa 2050 jan day
for (let year = 2000; year <= 2050; year++) {
  let dat = new Date(year, 0);
  if (dat.getDay() === 0) {
    console.log("first january beign fisrt sunday", year);
  }
}

//enter a random number between 1 to 10 if the mach
let number = Math.ceil(Math.random() * 10);
// console.log(number);
let enternumber = prompt("Guess the number between 1 and 10 inclusive");
if (enternumber === number) {
  console.log("great conguraltio");
} else {
  console.log("your enter number not match");
}
// date left for christms
  today = new Date();
var chrismis = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  chrismis.setFullYear(chrismis.setFullYear() + 1);
}
let oneday = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil(chrismis.getTime() - today.getTime()) / oneday +
    "days left in chirsmis"
);
