// This function truncates a string (first argument) if it is longer than
// the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk

  	if (str.length <= num) {
  		return str;
  	}
  	else if (str.slice(0, num).length < 3) {
  		return str.slice(0, num) + "...";
  	}
  	else if (str.length > num) {
  		return str.slice(0, num).replace(/...$/,"...");
  	}

}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);