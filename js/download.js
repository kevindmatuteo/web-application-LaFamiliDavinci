var arrayImages = ["resources/images/areaCostera_1.png", "resources/images/areaCostera_2.png",
    "resources/images/trayectoria_1.png", "resources/images/trayectoria_2.png", "resources/images/trayectoria_3.png"];
var index = 0;

var arrayVideos = ["resources/videos/video1.mp4", "resources/videos/video2.mp4", "resources/videos/video3.mp4"]
var videoIndex = 0;

function changeImage1() {
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
function changeImage2() {
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

function changeVideo1() {
    var video = document.getElementById("video");
    video.classList.add("fade-in-out"); // Agrega la clase de animación
    setTimeout(() => {
        // Quita la clase después de que termine la animación
        video.classList.remove("fade-in-out");
    }, 500); // Ajusta este tiempo para que coincida con la duración de la animación en milisegundos

    videoIndex = (videoIndex + 1) % arrayVideos.length; // Incrementa el índice y vuelve a 1 si supera la longitud del array
    if (video.src == arrayVideos[2]) {
        videoIndex = 2
    }
    video.src = arrayVideos[videoIndex]; // Actualiza la imagen con la siguiente del array
}
function changeVideo2() {
    var video = document.getElementById("video");
    video.classList.add("fade-in-out"); // Agrega la clase de animación
    setTimeout(() => {
        // Quita la clase después de que termine la animación
        video.classList.remove("fade-in-out");
    }, 500); // Ajusta este tiempo para que coincida con la duración de la animación en milisegundos

    videoIndex = (videoIndex - 1 + arrayVideos.length) % arrayVideos.length; // Resta el índice y asegúrate de que no sea negativo
    if (video.src == arrayVideos[2]) {
        videoIndex = 2
    }
    video.src = arrayVideos[videoIndex]; // Actualiza la imagen con la imagen anterior en el array
}

function descargarArchivo() {
    // URL del archivo que deseas descargar
    var url = 'installer/juegoPrueba.txt';

    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = url;
    enlaceDescarga.download = "juegoPrueba.txt";

    // Ocultar el enlace y añadirlo al documento
    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);

    // Simular clic en el enlace para iniciar la descarga
    enlaceDescarga.click();

    // Limpiar después de la descarga
    document.body.removeChild(enlaceDescarga);
}