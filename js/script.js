

const mainMenu = document.getElementById("mainMenu");

function toggleMainMenu(x) {
  
  x.classList.toggle("changed");
  
  if (mainMenu.style.display === "block")
    mainMenu.style.display = "none";
  else
    mainMenu.style.display = "block";
    /* 
    ** Here i need to implement the 
    ** function that hides the mmen
    ** when any othe element get clicked
    ************************************,*/
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
