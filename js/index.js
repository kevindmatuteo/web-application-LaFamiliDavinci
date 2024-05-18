function cambiarTexto(nombrePersonaje) {
    var descripcion = "";
    switch (nombrePersonaje) {
        case 'Davinci':
            descripcion = "Hola, soy Davinci, un pana que va al gym y nada más jaja. Bueno me gustan los videojuegos, entrenar y pasar tiempo con mi familia.";
            break;
        case 'J. Cheng':
            descripcion = "YO SOY J.CHENG. Soy dueño de los mejores restaurantes chinos del mundo, Cheng Pooh Garden. Te recomiendo ir jeje, seguro que te gustará";
            break;
        case 'Freezer':
            descripcion = "¡Ho ho ho! Muy buenas soy un hombre que pasaba por aqui. ¿Que porque voy de Freezer?, pues porque es un personaje que me representa. Si me quieres ver pásate por el GYM";
            break;
        case 'Nigel':
            descripcion = "Yo soy Nigel. Ehh bueno, puede ser una tontería pero, he estado buscando por mi cuenta y el creo que el mejor restaurante es el Cheng Pooh Garden. ";
            break;
        case 'Entrenador':
            descripcion = "¡Hola, soy el Entrenador! Te recomiendo entrenar en nuestro gimnasio, con mi entrenamiento podremos superar a Davinci -_-";
            break;
        default:
            descripcion = "Selecciona un personaje para ver su descripción.";
    }
    document.getElementById('descripcion-personaje').textContent = descripcion;
}

var arrayImages = ["resources/images/areaCostera_1.png", "resources/images/areaCostera_2.png",
    "resources/images/trayectoria_1.png", "resources/images/trayectoria_2.png", "resources/images/trayectoria_3.png"];
var index = 0;


function changeImage(nombrePersonaje) {
    var img = document.getElementById("characters-image");
    img.classList.add("fade-in-out");
    setTimeout(() => {
        img.classList.remove("fade-in-out");
    }, 500);

    var url = "";
    switch (nombrePersonaje) {
        case 'Davinci':
            url = "resources/images/davinci.jpeg";
            break;
        case 'J. Cheng':
            url = "resources/images/jcheng.jpeg";
            break;
        case 'Freezer':
            url = "resources/images/freezer.jpeg";
            break;
        case 'Nigel':
            url = "resources/images/nigel.jpeg";
            break;
        case 'Entrenador':
            url = "resources/images/entrenador.jpeg";
            break;
        default:
            url = "resources/images/logo2.jpeg";
    }
    document.getElementById('characters-image').src = url;

    /*document.getElementById('descripcion-personaje').textContent = descripcion;
    var img = document.getElementById("image");
    img.classList.add("fade-in-out");
    setTimeout(() => {
        img.classList.remove("fade-in-out");
    }, 500);

    index = (index + 1) % arrayImages.length;
    if (img.src == arrayImages[2]) {
        index = 2
    }
    img.src = arrayImages[index];*/
}