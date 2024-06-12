function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

//add an eventlistener for the closing the menu: 


navLink.forEach(n => n.addEventListener("click" , closeMenu))

function closeMenu () {
    hamburgerActive.classList.remove("active")
    menupaste.classList.remove("active")
}



