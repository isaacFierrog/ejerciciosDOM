const d = document, 
    w = window,
    n = navigator,
    tiempoMensaje = 3000;
let refInterval = null;

const estadoDeConexion = () => {
    const $aviso = d.getElementById("aviso"),
        $mensaje = d.querySelector(".aviso__mensaje");

    if(n.onLine){
        $aviso.classList.toggle("aviso--oculto");
        $aviso.classList.toggle("aviso--online");
        $aviso.classList.toggle("aviso--offline");
        $mensaje.textContent = "La conexion se ha reestablecido";
        refInterval = setInterval(() => {
            $aviso.classList.toggle("aviso--oculto");
            clearInterval(refInterval);
        }, tiempoMensaje);
    }else{
        $aviso.classList.toggle("aviso--oculto");
        $aviso.classList.toggle("aviso--online");
        $aviso.classList.toggle("aviso--offline");
        $mensaje.textContent = "La conexion se ha perdido";
        refInterval = setInterval(() => {
            $aviso.classList.toggle("aviso--oculto");
            clearInterval(refInterval);
        }, tiempoMensaje);
    }
};

export default function detectarConexion(){
    w.addEventListener("online", estadoDeConexion);
    w.addEventListener("offline", estadoDeConexion);
}