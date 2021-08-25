const d = document;

export default function relojAlarma(selecDisplay, selecBoton){
    const $display = d.querySelector(selecDisplay),
        $alarma = d.querySelector(".reloj__alarma");
    let refTiempo = null;
    
    d.addEventListener("click", e => {
        if(!e.target.matches(selecBoton)) return;
        
        const accionBoton = e.target.getAttribute("data-boton");
        
        if(accionBoton === "irel"){
            e.target.setAttribute("disabled", true);
            refTiempo = setInterval(() => {
                const tiempoActual = new Date();
                $display.textContent = tiempoActual.toLocaleTimeString();
            }, 1000);
        }

        if(accionBoton === "drel"){
            d.querySelector("[data-boton=irel]").removeAttribute("disabled");
            clearInterval(refTiempo);
            $display.textContent = "";
        }

        if(accionBoton === "iala"){
            $alarma.play();
            $alarma.loop = true;
            e.target.setAttribute("disabled", true);
        }

        if(accionBoton === "dala"){
            $alarma.pause();
            $alarma.currentTime = 0;
            d.querySelector("[data-boton=iala]").removeAttribute("disabled");
            clearInterval(refTiempo);
            $display.textContent = "";
        }
    });
}