var arrayImages = ["resources/images/areaCostera_1.png", "resources/images/areaCostera_2.png",
    "resources/images/trayectoria_1.png", "resources/images/trayectoria_2.png", "resources/images/trayectoria_3.png"];
var index = 0;

var arrayDrawings = ["resources/images/draw1.jpeg", "resources/images/draw2.jpeg",
    "resources/images/draw3.jpeg", "resources/images/draw4.jpeg", "resources/images/draw5.jpeg"];
var drawingIndex = 0;

function changeGameImage1() {
    var img = document.getElementById("image");
    img.classList.add("fade-in-out"); // Agrega la clase de animación
    setTimeout(() => {
        // Quita la clase después de que termine la animación
        img.classList.remove("fade-in-out");
    }, 500); // Ajusta este tiempo para que coincida con la duración de la animación en milisegundos

    index = (index + 1) % arrayImages.length; // Incrementa el índice y vuelve a 1 si supera la longitud del array
    if (img.src == arrayImages[2]) {
        index = 2
    }
    img.src = arrayImages[index]; // Actualiza la imagen con la siguiente del array
}
function changeGameImage2() {
    var img = document.getElementById("image");
    img.classList.add("fade-in-out"); // Agrega la clase de animación
    setTimeout(() => {
        // Quita la clase después de que termine la animación
        img.classList.remove("fade-in-out");
    }, 500); // Ajusta este tiempo para que coincida con la duración de la animación en milisegundos

    index = (index - 1 + arrayImages.length) % arrayImages.length; // Resta el índice y asegúrate de que no sea negativo
    if (img.src == arrayImages[2]) {
        index = 2
    }
    img.src = arrayImages[index]; // Actualiza la imagen con la imagen anterior en el array
}

function changeDrawing1() {

    var img = document.getElementById("drawings");
    img.classList.add("fade-in-out");
    setTimeout(() => {
        img.classList.remove("fade-in-out");
    }, 500);

    drawingIndex = (drawingIndex + 1) % arrayDrawings.length;
    if (img.src == arrayDrawings[2]) {
        drawingIndex = 2
    }
    img.src = arrayDrawings[drawingIndex];
}
function changeDrawing2() {
    var img = document.getElementById("drawings");
    img.classList.add("fade-in-out");
    setTimeout(() => {
        img.classList.remove("fade-in-out");
    }, 500);

    drawingIndex = (drawingIndex - 1 + arrayDrawings.length) % arrayDrawings.length;
    if (img.src == arrayDrawings[2]) {
        drawingIndex = 2
    }
    img.src = arrayDrawings[drawingIndex];
}



function descargarArchivo() {
    // URL del archivo que deseas descargar
    var url = 'installer/LaFamiliaDaVinci_installer_V.0.8.5.exe';

    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = url;
    enlaceDescarga.download = "LaFamiliaDaVinci_installer_V.0.8.5.exe";

    // Ocultar el enlace y añadirlo al documento
    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);

    // Simular clic en el enlace para iniciar la descarga
    enlaceDescarga.click();

    // Limpiar después de la descarga
    document.body.removeChild(enlaceDescarga);
}