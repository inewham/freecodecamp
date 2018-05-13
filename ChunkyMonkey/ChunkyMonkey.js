// This is a function that splits an array (first argument) into
// groups the length of size (second argument) and returns them
// as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
var result = [];
var begin = 0;
var end = size;
	for (var i = 0; i < Math.ceil(arr.length / size); ++i){
		
		result.push(arr.slice(begin,end));
		begin += size;
		end += size;

	}

	return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);