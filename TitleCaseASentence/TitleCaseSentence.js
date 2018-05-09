/* This function returns the provided string with the first letter
of each word capitalized. Making sure the rest of the word is in lower case. */

function titleCase(str) {
	return str.replace(/\w\S*/g,
						 function(txt){return txt.charAt(0)
						 .toUpperCase() + txt
						 .substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot");