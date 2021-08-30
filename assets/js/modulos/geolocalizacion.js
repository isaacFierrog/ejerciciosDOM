const d = document,
    n = navigator,
    g = n.geolocation;

export default function obtenerLocalizacion(id){
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    
    const success = position => {
        const coords = position.coords;

        $id.innerHTML = `
            <p>Tu posicion actual es: </p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precision: <b>${coords.accuracy}</b>m</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Ver en google maps</a>
        `;
        console.log(position);
    };
    const error = err => {
        console.log(err);
    };

    g.getCurrentPosition(success, error, options);

}