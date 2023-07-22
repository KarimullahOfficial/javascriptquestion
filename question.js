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

let firstnum = prompt("enter a first number");
let secondnum = prompt("enter a second number");
let multi, division;
multi = firstnum * secondnum;
division = firstnum / secondnum;
console.log(" multiplication", multi);
console.log("division", division);

// convert tempreature in to farnheit and celcius;

let celcius = prompt("enter a celcius");
let farn = prompt("enter a farn");
let cel = celcius / 5;
let faran = (farn - 32) / 9;
console.log("celcius", cel, "farnhaite ", faran);

//get url
console.log(document.URL);

//create a varible by userdefine

let var_name = "yz";
let n1 = 3;
this[var_name] = n1;
console.log(this[var_name]);
var filename = "index.html";
console.log(filename.split(".").pop());
//difference
function diffence(n) {
  if (n < 13) return 13 - n;
  else return (13 - n) * 2;
}
console.log(diffence(20));
console.log(diffence(10));
//two number add if they same retrun triple

let number1 = 3;
let number2 = 2;
let sum = number1 + number2;
if (number1 == number2) {
  console.log(sum * 3);
} else {
  console.log(sum);
}
// absolute difference
function absolute(n) {
  if (n < 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}
console.log(absolute(34));
console.log(absolute(12));

//check pair

function pair(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(pair(10, 40));
console.log(pair(50, 50));

// check with in 100 and 400
function test1(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

console.log(test1(10));
console.log(test1(40));
console.log(test1(300));
// given two integer whether its positive or negative

function check(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(2, -2));
console.log(check(-2, -1));

// adding string
function check_stirng(str) {
  if (str === null || str === undefined || str.substring(0, 2) == "Py") {
    return str;
  } else {
    return "Py" + str;
  }
}
console.log(check_stirng("python"));
console.log(check_stirng("thon"));

// remove character
function remove_char(str1, re) {
  one = str1.substring(0, re);
  two = str1.substring(re + 1, str1.lenght);
  return one + two;
}
console.log(remove_char("karim", 0));
//remove first and last character

function first_last(str2) {
  if (str2.lenght <= 1) {
    return str2;
  }
  middle = str2.substring(1, str2.lenght, -1);
  return str2.charAt(str2.lenght, -1) + middle + str2.charAt(0);
}
console.log(first_last("mulh"));
console.log(first_last("karim"));
// add string first and back
function first_back(str) {
  first = str.substring(0, 1);
  return first + str + first;
}
console.log(first_back("alpah"));
console.log(first_back("beta"));

// check the number is divisible by 3 and 7
function test1(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(test1(50));
console.log(test1(15));
//check wheather a number in between 50 && 90
function check(x, y) {
  if ((x >= 50 && y <= 90) || (y >= 90 && x <= 50)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(45, 78));

// check string  length is 3 or not
function add(str) {
  if (str.length >= 3) {
    strlen = 3;
    back = str.substring(str.length - 3);

    return back + str + back;
  } else {
    return false;
  }
}
console.log(add("ab"));

// check wheather string is start with java or no not and lenght 4
function check(str) {
  if (str.length <= 4) {
    return false;
  }
  front = str.substring(0, 4);
  if ((front = "Java")) {
    return true;
  } else {
    return false;
  }
}
console.log(check("    javascript"));
console.log(check("sct"));
// check 3 integer include or not
function check(x, y, z) {
  if ((x <= 50 && y >= 90) || y <= 50 || y >= 90 || (z <= 50 && y >= 90)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(67, 89, 90));
console.log(check(1, 2, 3));
//find max value
function maxvalue(x, y, z) {
  max = 0;
  if (x > y) {
    max = x;
  } else {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  return max;
}
console.log(maxvalue(1, 2, 3));

//find min value
function minvalue(x, y, z) {
  min = 0;
  if (x < y) {
    min = x;
  } else {
    min = y;
  }
  if (z < min) {
    min = z;
  }
  return min;
}
console.log(minvalue(1, 2, 3));
// find nearset
function nearset(x, y) {
  if (x != y) {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
  }
  if (x1 < y1) {
    return x;
  }
  if (y1 < x1) {
    return y;
  } else {
    return 0;
  }
}
console.log(nearset(90, 97));
function check(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(check(89, 90));
// revese string
function revers(str) {
  return str.split("").reverse().join("");
}
console.log(revers("JavaScript"));
