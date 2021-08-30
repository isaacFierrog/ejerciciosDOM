const d = document;

export default function filtrarElementos(selecElem, selecFiltro){
    d.addEventListener("keyup", e => {
        if(e.target.matches(selecFiltro)){
            d.querySelectorAll(selecElem).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))
                                                            ? el.classList.remove("lista__item--oculto")
                                                            : el.classList.add("lista__item--oculto"));
        }
    });
}