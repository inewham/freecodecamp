// This function returns true if the string in the first element of the array
// contains all of the letters of the string in the second element
// of the array.

function mutation(arr) {

	var a = arr[1].toLowerCase().split('');
	var b = arr[0].toLowerCase();

	for (var i = 0; i < arr[1].length; ++i) {
		if(b.indexOf(a[i]) == -1) {
			return false;
		}
	}
	return true;
}
mutation(["hello", "hey"]);