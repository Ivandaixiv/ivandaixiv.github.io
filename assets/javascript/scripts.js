const menuButton = document.getElementById("menu-button");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navbar = document.getElementById("sliding-navbar");

menuButton.addEventListener("click", function () {
    // const navbar = document.getElementById("sliding-navbar");
    if(closeMenu.style.display != "none") {
        menuButton.style.background = "#374785";
        closeMenu.style.display = "none";
        openMenu.style.display = "flex";
        navbar.classList.toggle("open");
    } else {
        menuButton.style.background = "";
        closeMenu.style.display = "flex";
        openMenu.style.display = "none";
        navbar.classList.remove("open");
    }
});

navbar.addEventListener("click", function () {
    menuButton.style.background = "";
    closeMenu.style.display = "flex";
    openMenu.style.display = "none";
    navbar.classList.remove("open");
});
