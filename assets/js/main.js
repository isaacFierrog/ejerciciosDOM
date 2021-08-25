import menuHamburguesa from "./modulos/menu-hamburguesa.js";
import relojAlarma from "./modulos/reloj-alarma.js";
import { moverPelota, atajosTeclado } from "./modulos/eventos-teclado.js";
import contador from "./modulos/countdown.js";
import volverAlInicio from "./modulos/boton-scroll.js";

const d = document;


d.addEventListener("DOMContentLoaded", e => {
    relojAlarma(".reloj__display", ".reloj__boton");
    moverPelota(".campo", ".pelota");
    atajosTeclado();
    contador(".contador__display");
    volverAlInicio(".boton--scroll");
    menuHamburguesa(".hamburger", ".panel");
});