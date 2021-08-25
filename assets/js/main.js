import menuHamburguesa from "./modulos/menu-hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    menuHamburguesa(".hamburger", ".panel");
});