const d = document;

export default function menuHamburguesa(selecBoton, selecPanel){
    const $boton = d.querySelector(selecBoton),
        $panel = d.querySelector(selecPanel);

    d.addEventListener("click", e => {
        if(e.target.matches(selecBoton) || e.target.matches(`${selecBoton} *`)){
            $panel.classList.toggle("panel--oculto");
            $boton.classList.toggle("is-active");
        }
    });
}