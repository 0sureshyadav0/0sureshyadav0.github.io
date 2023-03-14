document.getElementById("hamburger").addEventListener("click", showMenu);

var isEnable = false;
function showMenu() {
  if (isEnable == true) {
   
    document.getElementById("hamburgerMenu").style = "display:flex;background-color: white;transition:3s ease-in-out;";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.display = "flex";

    isEnable = false;
  } else {
   
    document.getElementById("hamburgerMenu").style =
      "display:flex;background-color: rgb(98, 9, 187);transition:3s ease-in-out;";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "flex";
    isEnable = true;
  }
  // animation-name:showMenu;animation-duration:.5s;animation-direction:reverse;
}
