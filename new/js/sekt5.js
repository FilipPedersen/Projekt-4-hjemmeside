function yScrollHandler(){
    var win = document.getElementById("peekaboo5");
    if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
	//win.style.webkitTransition = "right 0.7s ease-in-out 0s";
	win.style.transition = "right 0.2s ease-in-out 0s";
	win.style.right = "0px";
    } else {
	win.style.transition = "right 0.2s ease-in-out 0s";
	win.style.right = "-1000px";
  win.style.bottom ="300px";
    }
}
window.onscroll = yScrollHandler;
