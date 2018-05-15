function reverseString(str) {
  var strSplit = str.split("");
  var reversed = strSplit.reverse();
  var strJoin = strSplit.join('');
  return strJoin;
}

reverseString("Greetings from Earth");