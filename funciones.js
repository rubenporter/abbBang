//INICIAR EL CONTADOR CUANDO CARGUE LA PAGINA
window.addEventListener('load', contadorMensaje, true);

var valido = "no";
contadorV1 = 0;
contadorV2 = 0;

function disparo(jugador) {
    if (valido == "si") {
        //SI EL DISPARO FUE HECHO EN UN TIEMPO VALIDO
        if (jugador == "v1") {
            //GANO EL JUGADOR v1, POR LO TANTO ALTERAMOS AL v2
            document.getElementById('img-v2').src = "v3.png";
            document.getElementById('img-v1').src = "v1.png";
            document.getElementBId('v2').removeAttribute("onclick");
            document.getElementBId('v1').removeAttribute("onclick");
            document.getElementById('marcador-v1').innerHTML += "X-";
            contadorV1++;
        } else {
            //GANO EL JUGADOR v2, POR LO TANTO ALTERAMOS AL v1
            document.getElementById('img-v1').src = "v3.png";
            document.getElementById('img-v2').src = "v1.png";
            document.getElementBId('v1').removeAttribute("onclick");
            document.getElementBId('v2').removeAttribute("onclick");
            document.getElementById('marcador-v2').innerHTML += "X-";
            contadorV2++;
        }
        //AGREGAMOS UN BOTON PARA JUGAR DE NUEVO
        document.getElementById('v2').innerHTML = "<button onclick='reset(\"" + jugador + "\")'>De nuevo</button>";
    } else {
        //SI EL DISPARO FUE HECHO EN UN TIEMPO INVALIDO
        document.getElementById(jugador).removeAttribute("onclick");
        //document.getElementById(jugador).style.opacity = ".4";
    }
}

function contadorMensaje() {
    mensaje = document.getElementById('mensaje');
    //PRIMER MENSAJE DESPUES DE UN SEGUNDO
    setTimeout(function () {
        mensaje.innerHTML = "En sus marcas"
        //EL SEGUNDO MENSAJE DESPUES ES EJECUTADO POR EL PRIMERO
        setTimeout(function () {
            mensaje.innerHTML = "Listos"
            //SE PREPARA EL TIEMPO RANDOM Y SE LE AÑADEN TRES CEROS (ms)
            tiempoRandom = Math.floor((Math.random() * 10) + 1);
            tiempoRandom = tiempoRandom + '000';
            console.log(tiempoRandom);
            //SE EJECUTA EL TERCER MENSAJE DESPUES DEL TIEMPO RANDOM
            setTimeout(function () {
                mensaje.innerHTML = "Fuera"
                //EL DISPARO AHORA ES VALIDO
                valido = "si";
            }, tiempoRandom);
        },1000);
    },1000);
}

function reset(jugador) {
    document.getElementById('img-v2').src = "v1.png";
    document.getElementById('img-v1').src = "v1.png";
    if (jugador == "v1") {
        //GANO EL JUGADOR v1, POR LO TANTO ALTERAMOS AL v2
        document.getElementBId('v2').setAttribute("onclick", "disparo('v2')");
        document.getElementBId('v1').setAttribute("onclick", "disparo('v1')");
    } else {
        //GANO EL JUGADOR v2, POR LO TANTO ALTERAMOS AL v1
        document.getElementBId('v1').setAttribute("onclick", "disparo('v1')");
        document.getElementBId('v2').setAttribute("onclick", "disparo('v2')");
    }
    
    valido = "no";
    contadorMensaje();
}