// check to see what the current stylesheet is
var styName = document.getElementsByClassName('style').href.substr(6,4)

function makeStyle(style){
    document.getElementsByClassName('style').href="style_"+style+".css";
}

makeStyle();
// check to see if the button has been pressed

// function to change the stylesheet