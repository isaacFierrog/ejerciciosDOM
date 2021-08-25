const d = document;
let posX = 0,
    posY = 0;


export function moverPelota(selecCampo, selecPelota){
    d.addEventListener("keydown", e => {
        const $campo = d.querySelector(selecCampo),
            $pelota = d.querySelector(selecPelota),
            posicionCampo = $campo.getBoundingClientRect(),
            posicionPelota = $pelota.getBoundingClientRect();

        switch(e.key){
            case "ArrowUp": 
                if(posicionPelota.top > posicionCampo.top){
                    posY--;
                    e.preventDefault();
                }
                break;
            case "ArrowDown": 
                if(posicionPelota.bottom < posicionCampo.bottom){
                    posY++;
                    e.preventDefault();
                }
                break;
            case "ArrowLeft":
                if(posicionPelota.left > posicionCampo.left){
                    posX--;
                }
                break;
            case "ArrowRight":
                if(posicionPelota.right < posicionCampo.right){
                    posX++;
                }
                break; 
        }

        $pelota.style.setProperty("transform", `translate(${posX * 10}px, ${posY * 10}px)`);
    });
}

export function atajosTeclado(){
    d.addEventListener("keypress", e => {
        if(e.shiftKey && e.key === "C"){
            alert("Hola como estas usuarios :P");
        }
    });
}