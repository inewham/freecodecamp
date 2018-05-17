/* This function returns the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number. */

function getIndexToIns(arr, num) {

  var result = arr.sort(function(a,b){return a - b;});
  var arrSize = result.length;

	for(var i=0;i<arrSize;++i){
		if(num <= result[i]){
			return i;
		}
	}
	return arrSize;
}

getIndexToIns([2, 5, 10], 15);