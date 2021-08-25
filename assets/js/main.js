import menuHamburguesa from "./modulos/menu-hamburguesa.js";
import relojAlarma from "./modulos/reloj-alarma.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    menuHamburguesa(".boton", ".panel");
    relojAlarma(".reloj__display", ".reloj__boton");
});