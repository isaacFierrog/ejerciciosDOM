const d = document;

const tiempo = {
    NOMBRE: "Isaac",
    FACTOR_DIAS: 1000 * 60 * 60 * 24,
    FACTOR_HORAS: 1000 * 60 * 60,
    FACTOR_MINUTOS: 1000 * 60,
    obtenerDias: function(milis){
        return Math.floor(milis / this.FACTOR_DIAS)
    },
    obtenerHoras: function(milis){
        return Math.floor((milis % this.FACTOR_DIAS) / this.FACTOR_HORAS)
    },
    obtenerMinutos: function(milis){
        return Math.floor(((milis % this.FACTOR_DIAS) % this.FACTOR_HORAS) / this.FACTOR_MINUTOS);
    },
    obtenerSegundos: function(milis){
        return Math.floor((((milis % this.FACTOR_DIAS) % this.FACTOR_HORAS) % this.FACTOR_MINUTOS) / 1000);
    }
};

const agregarCeros = (valor, numCeros) => ("0".repeat(numCeros) + valor.toString()).slice(-(numCeros + 1));

export default function contador(selecDisplay){
    const $form = d.querySelector(".form--fecha"),
        $display = d.querySelector(selecDisplay);

    d.addEventListener("submit", e => {
        if(!e.target === $form) return;
        e.preventDefault();

        const [anio, mes, dia] = e.target.fecha.value.split("-"); 
        const fechaObjetivo = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));

        const contador = setInterval(() => {
            const deltaTiempo = fechaObjetivo.getTime() - Date.now(),
                dias = agregarCeros(tiempo.obtenerDias(deltaTiempo), 2),
                horas = agregarCeros(tiempo.obtenerHoras(deltaTiempo), 1),
                minutos = agregarCeros(tiempo.obtenerMinutos(deltaTiempo), 1),
                segundos = agregarCeros(tiempo.obtenerSegundos(deltaTiempo), 1);

            $display.textContent = `${dias}D - ${horas}H - ${minutos}M - ${segundos}S`;

            if(deltaTiempo <= 0){
                clearInterval(contador);
                $display.textContent = "!HOY ES EL DIA¡";
            }
        }, 1000);
    });
}