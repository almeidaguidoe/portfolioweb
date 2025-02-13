/* MODO CLARO - OSCURO */

const body = document.getElementById('body');
const tituloPrincipal = document.getElementById('titulo-principal');
const textos = document.getElementsByClassName('texto');
const contenedor = document.getElementsByClassName('contenedor');
const fotoPerfil = document.getElementById('foto-perfil');
const cajaPrincipal = document.getElementById('caja-principal');
const iconoBotones = document.getElementsByClassName('icono-botones');
const iconoBotonesGrande = document.getElementsByClassName('icono-botones-grande');
const lineaDivisoriaIconosGrandes = document.getElementsByClassName('grupo-botones-grandes__titulo-icono');
const textoAptitud = document.getElementsByClassName('texto-aptitud');
const curriculum = document.getElementById('curriculum');
const contacto = document.getElementById('contacto');
const proyecto = document.getElementsByClassName('proyecto');
const proyectoTitulo = document.getElementsByClassName('proyecto-titulo');
const imgModoClaroOscuro = document.getElementById('img-modo-claro-oscuro');

const botonModoClaroOscuro = document.getElementById('boton-modo-claro-oscuro');

let modoClaroActivo = false;

function modoClaro() {
    if (modoClaroActivo === false) {
        body.classList.add('body-modo-claro');
        tituloPrincipal.classList.add('titulo-principal-modo-claro');
        for (let i=0; i < textos.length; i++) {
            textos[i].classList.add('texto-modo-claro');
        }
        for (let i=0; i < contenedor.length; i++) {
            contenedor[i].classList.add('contenedor-modo-claro');
        }
        fotoPerfil.src = './img/foto-perfil-modo-claro.png';
        cajaPrincipal.classList.add('caja-principal-modo-claro');
        for (let i=0; i < iconoBotones.length; i++) {
            iconoBotones[i].classList.add('icono-botones-modo-claro');
        }
        for (let i=0; i < iconoBotonesGrande.length; i++) {
            iconoBotonesGrande[i].classList.add('icono-botones-modo-claro');
        }
        for (let i=0; i < lineaDivisoriaIconosGrandes.length; i++) {
            lineaDivisoriaIconosGrandes[i].classList.add('grupo-botones-grandes__titulo-icono-modo-claro');
        }
        for (let i=0; i < textoAptitud.length; i++) {
            textoAptitud[i].classList.add('texto-aptitud-modo-claro');
        }
        curriculum.classList.add('contenedores-hover-modo-claro');
        contacto.classList.add('contenedores-hover-modo-claro');
        for (let i=0; i < proyecto.length; i++) {
            proyecto[i].classList.add('proyecto-modo-claro');
        }
        for (let i=0; i < proyectoTitulo.length; i++) {
            proyectoTitulo[i].classList.add('proyecto-titulo-modo-claro');
        }
        botonModoClaroOscuro.classList.add('boton-modo-claro-oscuro-modo-claro');
        imgModoClaroOscuro.src = './img/icono-luna.png';

        modoClaroActivo = true;

    } else {
        body.classList.remove('body-modo-claro');
        tituloPrincipal.classList.remove('titulo-principal-modo-claro');
        for (let i=0; i < textos.length; i++) {
            textos[i].classList.remove('texto-modo-claro');
        }
        for (let i=0; i < contenedor.length; i++) {
            contenedor[i].classList.remove('contenedor-modo-claro');
        }
        fotoPerfil.src = './img/foto-perfil.png';
        cajaPrincipal.classList.remove('caja-principal-modo-claro');
        for (let i=0; i < iconoBotones.length; i++) {
            iconoBotones[i].classList.remove('icono-botones-modo-claro');
        }
        for (let i=0; i < iconoBotonesGrande.length; i++) {
            iconoBotonesGrande[i].classList.remove('icono-botones-modo-claro');
        }
        for (let i=0; i < lineaDivisoriaIconosGrandes.length; i++) {
            lineaDivisoriaIconosGrandes[i].classList.remove('grupo-botones-grandes__titulo-icono-modo-claro');
        }
        for (let i=0; i < textoAptitud.length; i++) {
            textoAptitud[i].classList.remove('texto-aptitud-modo-claro');
        }
        curriculum.classList.remove('contenedores-hover-modo-claro');
        contacto.classList.remove('contenedores-hover-modo-claro');
        for (let i=0; i < proyecto.length; i++) {
            proyecto[i].classList.remove('proyecto-modo-claro');
        }
        for (let i=0; i < proyectoTitulo.length; i++) {
            proyectoTitulo[i].classList.remove('proyecto-titulo-modo-claro');
        }
        botonModoClaroOscuro.classList.remove('boton-modo-claro-oscuro-modo-claro');
        imgModoClaroOscuro.src = './img/icono-sol.png';

        modoClaroActivo = false;

    }
}

botonModoClaroOscuro.addEventListener('click', modoClaro);