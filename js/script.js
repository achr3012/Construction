let mainMenu = document.getElementById("mainMenu");
function toggleMainMenu(x) {
  x.classList.toggle("changed");
  if (mainMenu.style.display === "block") {
    mainMenu.style.display = "none";
  } else {
    mainMenu.style.display = "block";
  }
}

