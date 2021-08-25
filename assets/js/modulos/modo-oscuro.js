const d = document, 
    ls = localStorage;

export default function modoOscuro(selecBoton, selecElementos){
    const $boton = d.querySelector(selecBoton);
    const $elementos = d.querySelectorAll(selecElementos);

    d.addEventListener("click", e => {
        if(e.target.matches(selecBoton)){
            if($boton.textContent === "🌙"){ 
                $boton.textContent = "☀️";
                ls.setItem("modo", "oscuro")
                $elementos.forEach(el => el.classList.add("oscuro"));
            }else{ 
                $boton.textContent = "🌙";
                ls.setItem("modo", "claro")
                $elementos.forEach(el => el.classList.remove("oscuro"));
            }
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        if(!ls.getItem("modo")){
            ls.setItem("modo", "claro");
        }

        if(ls.getItem("modo") === "claro"){
            $boton.textContent = "🌙";
            $elementos.forEach(el => el.classList.remove("oscuro"));
        }else if(ls.getItem("modo") === "oscuro"){
            $boton.textContent = "☀️";
            $elementos.forEach(el => el.classList.add("oscuro"));
        }
    });
}