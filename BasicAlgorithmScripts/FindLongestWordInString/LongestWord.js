/* This function returns the length of the longest word in the provided sentence. */

function findLongestWord(str) {
	
	var strArray = str.split(" ");
	var strLength = [];
	for (var i = 0; i < strArray.length; i++) {
		
		strLength.push(strArray[i].length);
		strLength.sort(function(a, b){return a - b;});
		strLength.reverse();
	}
  return strLength[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");