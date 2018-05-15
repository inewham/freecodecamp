// This function removes all falsy values from an array.

function bouncer(arr) {

	var newArray = [];
	
	
	for (var i=0;i<arr.length;++i){
		var x = Boolean(arr[i]);
		if (x) {  
			newArray.push(arr[i]);
		}
	}

	return newArray;
}

bouncer([1, null, NaN, 2, undefined]);