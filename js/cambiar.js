function cambiarColor(colorBack,colorFondo, colorTexto, colorHover, elemento) {
    document.querySelector('body').style.backgroundColor = colorBack;
    document.querySelector('.header').style.backgroundColor = colorFondo;
    document.querySelector('.submenu .hijos').style.backgroundColor = colorFondo;    
    var elementos = document.querySelectorAll('.header .nav-links li');
    elementos.forEach(function (elementoLi) {
        var enlace = elementoLi.querySelector('a');
        if (enlace) {
            enlace.style.color = colorTexto;

            // Agregar regla de estilo para el estado hover
            enlace.addEventListener('mouseover', function () {
                this.style.color = colorHover;
            });

            // Restaurar el color normal al salir del hover
            enlace.addEventListener('mouseout', function () {
                this.style.color = colorTexto;
            });
        }
    });

    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();
}
