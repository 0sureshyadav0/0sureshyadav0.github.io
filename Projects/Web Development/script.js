document.getElementById("hamburger").addEventListener("click", showMenu);

var isEnable = false;
function showMenu() {
  if (isEnable == true) {
    document.getElementById("hamburgerMenu").style = "display:none";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    isEnable = false;
  } else {
    document.getElementById("hamburgerMenu").style =
      "display:flex;animation-name:showMenu;animation-duration:1s;animation-direction:reverse;";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "flex";
    isEnable = true;
  }
}
