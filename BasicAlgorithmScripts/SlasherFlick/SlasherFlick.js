// This function returns the remaining elements of an array
// after chopping off n elements from the head.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var result = arr.splice(howMany);
  return result;
}

slasher([1, 2, 3], 2);