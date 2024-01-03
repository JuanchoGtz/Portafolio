function cambiarColor(colorBack,colorFondo, colorTexto, colorHover, elemento) {
    document.querySelector('body').style.backgroundColor = colorBack;
    document.querySelector('.header').style.backgroundColor = colorFondo;
    document.querySelector('.submenu .hijos').style.backgroundColor = colorFondo;
    var elementosCarrusel = document.querySelectorAll('.carrusel .elemento');
    elementosCarrusel.forEach(function (elementoCarrusel) {
        elementoCarrusel.style.backgroundColor = colorFondo;
    });    
    var elementos = document.querySelectorAll('.header .nav-links li');
    elementos.forEach(function (elementoLi) {
        var enlace = elementoLi.querySelector('a');
        if (enlace) {
            enlace.style.color = colorTexto;
            enlace.addEventListener('mouseover', function () {
                this.style.color = colorHover;
            });
            enlace.addEventListener('mouseout', function () {
                this.style.color = colorTexto;
            });
        }
    });
    event.preventDefault();
}
