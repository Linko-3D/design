document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menuBurger = document.getElementById("menu-burger");
    const icon = burger.querySelector(".icon"); // Select the ion-icon element inside the burger div

    burger.addEventListener("click", () => {
        menuBurger.classList.toggle("active");
        if (menuBurger.classList.contains("active")) {
            icon.setAttribute("name", "close-outline"); // Change the icon when menu is active
        } else {
            icon.setAttribute("name", "menu-outline"); // Change back the icon when menu is not active
        }
    });
});
