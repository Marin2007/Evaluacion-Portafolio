let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {/*Asigna una función que se ejecutará cada vez que el usuario se desplace por la página scroll*/
    sections.forEach(sec => {/*Itera sobre cada elemento en la colección sections*/
        let top = window.scrollY; /*Obtiene la posición actual del desplazamiento vertical desde la parte superior de la ventana del navegador y la guarda en la variable top.*/
        let offset = sec.offsetTop - 150;/*Calcula la posición superior del elemento sec respecto al documento y le resta 150 píxeles. Esto se usa para ajustar el punto en el que el enlace de navegación debería volverse activo.*/
        let height = sec.offsetHeight;/*Obtiene la altura del elemento sec y la guarda en la variable height*/
        let id = sec.getAttribute('id');/*Obtiene el valor del atributo id del elemento sec y lo guarda en la variable id. Este ID se usa para identificar qué enlace de navegación debe volverse activo.*/
        
        if (top >= offset && top < offset + height) {/*Comprueba si la posición actual del desplazamiento (top) está dentro del rango de la sección actual, offset hasta offset + height*/
            navLinks.forEach(links => {/*recorre sobre cada enlace en la colección navLinks*/
                links.classList.remove('active');/*Elimina la clase active del enlace actual, desmarcándolo como activo.*/
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');/*Selecciona el enlace cuyo atributo href contiene el ID de la sección actual (id) y le añade la clase active, marcándolo como activo.*/
            });
        }
    });
}

menuIcon.onclick = () => {/*Asigna una función que se ejecutará cuando el usuario haga clic en el elemento menuIcon.*/
    menuIcon.classList.toggle('bx-x');/*se usa para poder cerrar el menu*/
    navbar.classList.toggle('active');/*Alterna la clase active en el navbar. Esto se usa para mostrar u ocultar el menú de navegación.*/
}