const d = document;

export default function obtenerGanador(selecLista, selecBoton){
    const $lista = d.querySelector(selecLista);

    d.addEventListener("click", e => {
        if(e.target.matches(selecBoton)){
            const ganador = $lista.children[Math.floor(Math.random() * $lista.children.length)].textContent;
            alert(`El ganador del sorteo es: ${ganador}`);
        }
    });
}