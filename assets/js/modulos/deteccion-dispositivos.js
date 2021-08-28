const d = document,
    n = navigator,
    ua = n.userAgent;

export default function deteccionDispositivos(){
    const $info = d.querySelector(".info"),
        $userDevice = d.getElementById("user-device");
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/),
        any: function(){
            return this.android() || this.ios() || this.windows();
        }
    };
    $info.textContent = ua;
    
    if(isMobile.android()){
        $userDevice.textContent = "Estas en un dispositivo Android";
    }

    if(isMobile.ios()){
        $userDevice.textContent = "Estas en un dispositivo IOS";
    }
}