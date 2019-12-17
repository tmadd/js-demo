/* var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#88888";
    }
    isBlue =!isBlue;
}, 1000); 
  */

  var button = document.querySelector("button");
  var isPurple = false;
  button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "white";
    } else{
        document.body.style.background = "purple"; 
    }
     isPurple = !isPurple;
  });
// remember document.toggle and put in css for purple body