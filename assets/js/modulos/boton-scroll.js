const d = document,
    w = window;

export default function volverAlInicio(selecBoton){
    const $boton = d.querySelector(selecBoton);

    w.addEventListener("scroll", e => {
        if(w.scrollY >= 500) $boton.classList.remove("boton--oculto");
        else $boton.classList.add("boton--oculto");
    });

    d.addEventListener("click", e => {
        if(e.target.matches(selecBoton) || e.target.matches(`${selecBoton} *`)){
            w.scrollTo(0,0);
        }
    });
}