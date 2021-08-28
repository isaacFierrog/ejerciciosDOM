import menuHamburguesa from "./modulos/menu-hamburguesa.js";
import relojAlarma from "./modulos/reloj-alarma.js";
import { moverPelota, atajosTeclado } from "./modulos/eventos-teclado.js";
import contador from "./modulos/countdown.js";
import volverAlInicio from "./modulos/boton-scroll.js";
import modoOscuro from "./modulos/modo-oscuro.js";
import responsiveMedia from "./modulos/responsive.js";
import responsiveTester from "./modulos/responsive-tester.js";
import deteccionDispositivos from "./modulos/deteccion-dispositivos.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    relojAlarma(".reloj__display", ".reloj__boton");
    moverPelota(".campo", ".pelota");
    atajosTeclado();
    contador(".contador__display");
    volverAlInicio(".boton--scroll");
    menuHamburguesa(".hamburger", ".panel");
    responsiveMedia("youtube","(min-width: 425px)", `<a href="https://www.youtube.com/watch?v=MGxLLJ9Lmcg&list=RDMM&index=27" rel="noopener">Ver en youtube</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/MGxLLJ9Lmcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveTester(".form__cerrar");
    deteccionDispositivos();
});

modoOscuro(".boton--modo", "[data-mode]");