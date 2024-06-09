const hamburgerActive = document.querySelector(".hamburger-icon")
const menupaste = document.querySelector(".headlist")



hamburgerActive.addEventListener("click",toggleMenu)

function toggleMenu() {
    hamburgerActive.classList.toggle("active"); 
    menupaste.classList.toggle("active");
    console.log(" You need to figure it out") 
}