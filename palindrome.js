function palindrome(str) {
  // Good luck!

//var result = str.toLowerCase().replace(/\W/g, "").split("").reverse().join("");
//var strLC = str.toLowerCase().replace(/\W/g, "");

var result = str.toLowerCase().replace(/[^a-z]/g, "").split("").reverse().join("");
var strLC = str.toLowerCase().replace(/[^a-z]/g, "");

if (result === strLC) {
	return true;
}else{
	return false;
}

}

palindrome("Hello world!");