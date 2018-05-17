/* One of the simplest and most widely known ciphers is a
Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount. */

function rot13(str) {
	var result = str.split('');
	var utf16 = "";

	for(var i=0;i<str.length;++i){
		index = result[i].charCodeAt(0);
		console.log("result["+i+"] = "+index+" "+"("+ String.fromCharCode(index)+")");
		if((index-13) >= 65){
			utf16 += String.fromCharCode((index-13));
		}else if((index-13) >= 52){
			utf16 += String.fromCharCode((index-13)+26);
		}else{
			utf16 += String.fromCharCode(index);
		}
	}

	return utf16;
}

rot13("SERR PBQR PNZC");