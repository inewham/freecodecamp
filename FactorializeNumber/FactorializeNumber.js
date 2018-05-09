function factorialize(num) {
    var x = num + 1;
	var y = 1;
	for (var i = 1; i < x; i++) {
		y *= i;
	}
  return y;
}

factorialize(5);