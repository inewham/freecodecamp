// This is a function that repeats a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
var strNum = "";

for (var i = 0; i < num; i++) {
	strNum += str;
}
  return strNum;
}

repeatStringNumTimes("abc", 3);