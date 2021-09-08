window.onload = () => {
    let hero = document.getElementById("hero");
    if (hero) hero.style.height = window.innerHeight - 60 + "px";

    let container = document.getElementById("hero-container");
    if (container) {
        container.style.height = window.innerHeight - 80 + "px";
        container.style.width = window.innerWidth - 40 + "px";
    }

    let logo = document.getElementsByClassName("logo")[0];
    if (logo) logo.style.top = `calc(${hero.style.height} / 2 - 64.8px)`;

    let copy = document.getElementsByClassName("copy");
    if (copy[0]) copy[0].style.marginRight = window.innerWidth * 0.1 * -1 + "px";

    let menu = document.getElementById("menu");
    if (menu) menu.addEventListener("click", () => {
        toggleMenu();
    });
}
let toggleMenu = () => {
    let menu = document.getElementById("menu");
    let nav = document.getElementById("nav");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("inactive");
        nav.style.display = "none";
    } else {
        menu.classList.remove("inactive");
        menu.classList.add("active");
        nav.style.display = "block";
    }
}