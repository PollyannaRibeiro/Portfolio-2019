function openSlideMenu(){
  // document.getElementById("side-menu").style.marginLeft = '0px';
  $("#side-menu").css({"marginLeft":"0", "transition":"0.5s"});

}

function closeSideMenu(){
  $("#side-menu").css({"marginLeft":"-250px", "transition":"0.5s"})
}