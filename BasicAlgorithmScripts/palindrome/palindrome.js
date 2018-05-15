/*
A palindrome is a word or sentence that's spelled the same way both forward and
backward, ignoring punctuation, case, and spacing.
The below function returns true if the given string is a palindrome. Otherwise,
return false.
All non-alphanumeric characters (punctuation, spaces and symbols) are remove and
turn everything is turned lower case in order to check for palindromes.
*/

function palindrome(str) {

var result = str.toLowerCase()
				.replace(/[^a-z0-9]/g, "")
				.split("")
				.reverse()
				.join("");
var strLC = str.toLowerCase()
				.replace(/[^a-z0-9]/g, "");

	if (result === strLC) {
		return true;
	}
	else
	{
		return false;
	}

}

palindrome("Hello world!");