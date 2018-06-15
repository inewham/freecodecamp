function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

$(document).ready(function() {

  getQuote();

  $.ajaxSetup({ cache: false });
  
  var randomQuote, author;

  function getQuote(){
    var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    $.getJSON(url, function(data){
      randomQuote = data[0].content;
      randomQuote = randomQuote.slice(3).slice(0, -6);
      author = data[0].title;
      $("#quote-content").html('"'+randomQuote+'"');
      $("#quote-title").html(" - "+ author);
      
    });
  }

  $('#tweetout').on('click', function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote);
  });

  $("#getMessage").on("click", function(){
    getQuote();
  });
});