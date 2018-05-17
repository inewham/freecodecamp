/* One of the simplest and most widely known ciphers is a
Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount. */

function rot13(str) {
  var result = str.split('');
  var utf16 = "";

  for(var i=0;i<str.length;++i){
	if(result[i].charCodeAt(0) >= 65 || result[i].charCodeAt(0) === 80){
 		utf16 += String.fromCharCode(result[i].charCodeAt(0)-13);
 		console.log(String.fromCharCode(result[i].charCodeAt(0)-13));
	}
  	else
  	{
  	console.log("space");
  	utf16 += result[i];
  	}
  }
return utf16;

}

rot13("SERR PBQR PNZC");