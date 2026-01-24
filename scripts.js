const contenedorMain = document.querySelector('.cont_main');
const panelLateral = document.querySelector('.panel-lateral');
const transicion = document.querySelector('.transicion');

/* BOTONES NAVEGACIÓN */

const botonHome = document.querySelector('.btn_home');
const botonSobreMi = document.querySelector('.nav_sobre-mi');
const botonHabilidades = document.querySelector('.nav_habilidades');
const botonCurriculum = document.querySelectorAll('.nav_curriculum');
const botonContacto = document.querySelectorAll('.nav_contacto');
const botonMasItems = document.getElementById('btn_mas-items');

generarHome();

/* Generación de Secciones */

function generarHome() {
    transicion.classList.remove('oculto');
    limpiarEfectosDeSeleccionNavs();
    setTimeout(() => {
        contenedorMain.innerHTML = '';
        const contenidoHome = document.createElement('div');
        contenidoHome.classList.add('seccion_presentacion');
        contenidoHome.innerHTML = `
            <h1>Portfolio de Guido Almeida</h1>
            <h2>Programador web</h2>
            <p>Podés hacer el recorrido entero haciendo click en la flecha ó ir directamente a la sección de tu interés</p>
        `;

        contenedorMain.appendChild(contenidoHome);
    }, 500);
    

    setTimeout(() => {
        transicion.classList.add('oculto');
    }, 1000);
}

function generarSobreMi() {
    transicion.classList.remove('oculto');
    limpiarEfectosDeSeleccionNavs();
    botonSobreMi.classList.add('seleccionada');

    setTimeout(() => {
        contenedorMain.innerHTML = '';
        const contenidoSobreMi = document.createElement('section');
        contenidoSobreMi.classList.add('seccion_sobre-mi');
        contenidoSobreMi.innerHTML = `
            <div class="box_sobre-mi">
                    <img src="./img/foto_sobre-mi.png" alt="foto mía de cara con un fondo oscuro">

                    <p>Hola! Mi nombre es Guido Almeida. Tengo 33 años, soy de Argentina y vivo en Morón, Buenos Aires.</p>
                    <p>Soy <strong>estudiante de Programación</strong> en la Universidad de Hurlingham y doy clases de inglés en un instituto.</p>
                    <p>Actualmente estoy buscando mi primer empleo formal como <strong>desarrollador web</strong>, mientras trabajo 
                        en proyectos por cuenta propia y aprendo cada día un poco 
                        más sobre mi área.
                    </p>
                    <p>La computación y la informática siempre fueron mi pasión. Siempre me fascinó hacer todo tipo de cosas con las 
                        computadoras y estoy constantemente aprendiendo cosas nuevas para hacer.</p>
                </div>
        `;

        contenedorMain.appendChild(contenidoSobreMi);
    }, 500);
    

    setTimeout(() => {
        transicion.classList.add('oculto');
    }, 1000);
}

function generarHabilidades() {
    transicion.classList.remove('oculto');
    limpiarEfectosDeSeleccionNavs();
    botonHabilidades.classList.add('seleccionada');
    setTimeout(() => {
        contenedorMain.innerHTML = '';
        const contenidoHabilidades = document.createElement('section');
        contenidoHabilidades.classList.add('seccion_habilidades');
        contenidoHabilidades.innerHTML = `
            <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de html" src="./img/habil_html.png">
                        <img class="img_logos_habil verde" src="./img/habil_html_verde.png">
                    
                    <h5>HTML</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de css" src="./img/habil_css.png">
                        <img class="img_logos_habil verde" src="./img/habil_css_verde.png">
                    
                    <h5>CSS3</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de javascript" src="./img/habil_javascript.png">
                        <img class="img_logos_habil verde" src="./img/habil_javascript_verde.png">
                    
                    <h5>Javascript</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de sql" src="./img/habil_sql.png">
                        <img class="img_logos_habil verde" src="./img/habil_sql_verde.png">
                    
                    <h5>MySQL</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de node js" src="./img/habil_node-js.png">
                        <img class="img_logos_habil verde" src="./img/habil_node-js_verde.png">
                    
                    <h5>Node JS</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de python" src="./img/habil_python.png">
                        <img class="img_logos_habil verde" src="./img/habil_python_verde.png">
                    
                    <h5>Python</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de github" src="./img/habil_github.png">
                        <img class="img_logos_habil verde" src="./img/habil_github_verde.png">
                    
                    <h5>GitHub</h5>
                </div>

                <div class="box_habilidades">
                    
                        <img class="img_logos_habil" alt="logo de office" src="./img/habil_office.png">
                        <img class="img_logos_habil verde" src="./img/habil_office_verde.png">
                    
                    <h5 class="office">Microsoft Office</h5>
                </div>
        `;

        contenedorMain.appendChild(contenidoHabilidades);
    }, 500);
    

    setTimeout(() => {
        transicion.classList.add('oculto');
    }, 1000);
}

function generarCurriculum() {
    transicion.classList.remove('oculto');
    limpiarEfectosDeSeleccionNavs();
    botonCurriculum.forEach(boton => {
        boton.classList.add('seleccionada');
    });
    
    setTimeout(() => {
        contenedorMain.innerHTML = '';
        const contenidoCurriculum = document.createElement('section');
        contenidoCurriculum.classList.add('seccion_curriculum');
        contenidoCurriculum.innerHTML = `
            <iframe 
                src="./pdf/guido-almeida-cv.pdf"
                title="Curriculum Vitae de Guido Almeida">
            </iframe>
            <div class="wrapper_botones">
                <a href="./pdf/guido-almeida-cv.pdf" target="_blank" rel="noopener">
                    Ver CV en otra pestaña
                </a>

                <a href="./pdf/guido-almeida-cv.pdf" download>
                    Descargar CV
                </a>
            </div>
        `;

        contenedorMain.appendChild(contenidoCurriculum);
    }, 500);
    

    setTimeout(() => {
        transicion.classList.add('oculto');
    }, 1000);
}

function generarContacto() {
    transicion.classList.remove('oculto');
    limpiarEfectosDeSeleccionNavs();
    botonContacto.forEach(boton => {
        boton.classList.add('seleccionada');
    });
    setTimeout(() => {
        contenedorMain.innerHTML = '';
        const contenidoContacto = document.createElement('section');
        contenidoContacto.classList.add('seccion_contacto');
        contenidoContacto.innerHTML = `
            <div class="box_contacto">
                    <p>Si sos recruiter, personal de recursos humanos, o te interesaría 
                        conversar conmigo acerca de alguna oportunidad o proyecto laboral, 
                        me encantaría que me escribas. Estoy disponible a escuchar ofertas 
                        de puestos en empresas a las que podría contribuir y crecer profesionalmente.
                    </p>
                    <p><strong>Dirección de email:</strong></p>
                    <div class="div_email">
                        <img src="./misc/img_email.png" alt="mi dirección de mail en imagen">
                    </div>
                    <div class="wrapper_boton-copiar">
                        <span class="mensaje-exito" id="copiar-email_msj-exito">Email copiado exitosamente!</span>
                        <button class="btn_copiar-email" data-email="almeidaguidoe@gmail.com">Copiar email</button>
                    </div>
                </div>
        `;

        contenedorMain.appendChild(contenidoContacto);

        /* Copiado de Email */

        const botonCopiar = document.querySelector('.btn_copiar-email');
        const mensajeExitoEmail = document.getElementById('copiar-email_msj-exito');

        botonCopiar.addEventListener('click', () => {
            const email = botonCopiar.dataset.email;

            navigator.clipboard.writeText(email).then(() => {
                mensajeExitoEmail.classList.add('visible');

                setTimeout(() => {
                    mensajeExitoEmail.classList.remove('visible');
                }, 3000);
            });
        });
    }, 500);
    

    setTimeout(() => {
        transicion.classList.add('oculto');
    }, 1000);
}

function mostrarMasItems() {
    panelLateral.classList.toggle('visible');
}



/* Eventos de navegación */
//botonHome.addEventListener('click', generarHome);
botonSobreMi.addEventListener('click', generarSobreMi);
botonHabilidades.addEventListener('click', generarHabilidades);
botonCurriculum.forEach(boton => {
    boton.addEventListener('click', generarCurriculum);
});

botonContacto.forEach(boton => {
    boton.addEventListener('click', generarContacto);
});

botonMasItems.addEventListener('click', mostrarMasItems);

/* Efectos visuales */

function limpiarEfectosDeSeleccionNavs() {
    const otrosBotones = document.querySelectorAll('.nav_item');
    otrosBotones.forEach(boton => {
        boton.classList.remove('seleccionada');
    })
}