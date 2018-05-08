function palindrome(str) {

var result = str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").reverse().join("");
var strLC = str.toLowerCase().replace(/[^a-z0-9]/g, "");

if (result === strLC) {
	return true;
}else{
	return false;
}

}

palindrome("Hello world!");