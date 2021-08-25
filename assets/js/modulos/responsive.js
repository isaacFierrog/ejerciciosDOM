const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    const breakPoint = w.matchMedia(mq);

    const responsive = e => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    }

    breakPoint.addEventListener("change", responsive);
    responsive(breakPoint);
}