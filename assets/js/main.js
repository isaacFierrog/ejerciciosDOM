import menuHamburguesa from "./modulos/menu-hamburguesa.js";
import relojAlarma from "./modulos/reloj-alarma.js";
import { moverPelota, atajosTeclado } from "./modulos/eventos-teclado.js";
import contador from "./modulos/countdown.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    menuHamburguesa(".boton", ".panel");
    relojAlarma(".reloj__display", ".reloj__boton");
    moverPelota(".campo", ".pelota");
    atajosTeclado();
    contador(".contador__display");
});