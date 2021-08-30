const d = document, 
    n = navigator,
    md = n.mediaDevices;

export default function webCam(id){
    const $video = d.getElementById(id);
    
    if(md.getUserMedia){
        md.getUserMedia({audio: false, video: true})
            .then(res => {
                $video.srcObject = res;
                $video.play();
            })
            .catch(err => {
                $video.insertAdjacentHTML("beforebegin", `<h2>La camara no puede mostrarse porque has negado los permisos o tu navegador no puede mostrarla</h2>`);
            });
    }
}