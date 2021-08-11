const mainMenu = document.getElementById("mainMenu");
function toggleMainMenu(x) {
  x.classList.toggle("changed");
  if (mainMenu.style.display === "block") {
    mainMenu.style.display = "none";
  } else {
    mainMenu.style.display = "block";
  }
}

const links = document.querySelectorAll("#mainMenu > ul > li > a");
links.forEach(function(link) { 
  link.onclick = function () {
    let ulStyle = this.nextElementSibling.style;
    if (ulStyle.display === "block")
      ulStyle.display = "none";
    else 
      ulStyle.display = "block";
  };
}); 
