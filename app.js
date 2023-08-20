document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menuBurger = document.getElementById("menu-burger");

    burger.addEventListener("click", () => {
        menuBurger.classList.toggle("active");
    });
});
