const d = document,
    w = window;
let refVentana = null;

export default function responsiveTester(selecBoton){
    const $form = d.querySelector(".form--tester"),
        $boton = d.querySelector(selecBoton);

    d.addEventListener("click", e => {
        if(!e.target.matches(selecBoton)) return;
        refVentana.close();
        $boton.setAttribute("disabled", true);
    });

    d.addEventListener("submit", e => {
        if(!e.target === $form) return;
        console.log("Soy un formulario");
        const url = e.target.url.value,
            ancho = e.target.ancho.value,
            alto = e.target.alto.value;

        refVentana = open(url, "",`width=${ancho},height=${alto}`);
        $boton.removeAttribute("disabled");
        console.log(url, ancho, alto);
    });
}