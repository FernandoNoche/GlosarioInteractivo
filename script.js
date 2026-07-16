/*=====================================
      ACADEMIA DE CIBERSEGURIDAD
======================================*/

const conceptos=[

{palabra:"Adware",definicion:"Programa que muestra publicidad automática mientras se utiliza una aplicación o se navega por Internet."},

{palabra:"AES",definicion:"Algoritmo de cifrado muy seguro utilizado para proteger información y comunicaciones digitales."},

{palabra:"Antispyware",definicion:"Software que detecta y elimina programas espía que recopilan información sin autorización."},

{palabra:"Ataque dirigido",definicion:"Ciberataque planeado específicamente contra una persona, empresa u organización."},

{palabra:"Ataque homográfico",definicion:"Técnica que utiliza sitios web falsos con nombres muy parecidos a los originales para engañar usuarios."},

{palabra:"Auditoría de seguridad",definicion:"Revisión de sistemas informáticos para detectar vulnerabilidades y mejorar la protección de datos."},

{palabra:"Autenticidad",definicion:"Garantía de que una persona, documento o información es verdadera y legítima."},

{palabra:"Autoridad de certificación",definicion:"Entidad que emite certificados digitales para verificar identidades en Internet."},

{palabra:"Backdoor",definicion:"Acceso oculto a un sistema que permite entrar sin seguir los procedimientos normales."},

{palabra:"Backup",definicion:"Respaldo de información que permite recuperarla en caso de pérdida o daño."},

{palabra:"Biometría",definicion:"Método de identificación basado en características físicas como huellas dactilares, rostro o iris."},

{palabra:"Bluetooth",definicion:"Tecnología inalámbrica que permite conectar dispositivos a corta distancia para intercambiar información."},

{palabra:"Botnet",definicion:"Conjunto de dispositivos infectados que son controlados de forma remota por un atacante."},

{palabra:"Bug",definicion:"Error o falla en un programa que puede provocar comportamientos inesperados."},

{palabra:"BYOD",definicion:"Práctica que permite a los empleados usar sus dispositivos personales para trabajar."},

{palabra:"Captcha",definicion:"Prueba utilizada para comprobar que quien accede a un sistema es una persona y no un robot."},

{palabra:"CERT",definicion:"Equipo especializado en prevenir, detectar y responder a incidentes de seguridad informática."},

{palabra:"Certificado digital",definicion:"Documento electrónico que confirma la identidad de una persona, empresa o sitio web."},

{palabra:"Ciberataque",definicion:"Acción maliciosa dirigida a dañar, alterar o acceder sin autorización a sistemas informáticos."},

{palabra:"Ciberdelincuente",definicion:"Persona que utiliza medios tecnológicos para cometer actividades ilegales en Internet."},

{palabra:"Cifrado asimétrico",definicion:"Método de cifrado que utiliza una clave pública para cifrar y una clave privada para descifrar."},

{palabra:"Clave privada",definicion:"Clave secreta utilizada para acceder o descifrar información protegida."},

{palabra:"Cloud Computing",definicion:"Tecnología que permite almacenar y utilizar recursos informáticos a través de Internet."},

{palabra:"Cookie",definicion:"Archivo que guarda información sobre la actividad y preferencias de navegación de un usuario."},

{palabra:"Correo spam",definicion:"Mensaje electrónico no solicitado, generalmente con fines publicitarios o fraudulentos."}

];

let indice=0;

let puntos=0;

let progreso=0;

let respuestaCorrecta="";

const titulo=document.getElementById("titulo");
const descripcion=document.getElementById("descripcion");
const pregunta=document.getElementById("pregunta");
const botones=document.querySelectorAll(".respuesta");
const zonaPregunta=document.getElementById("zonaPregunta");
const mensaje=document.getElementById("mensaje");
const btnComenzar=document.getElementById("btnComenzar");
const btnSiguiente=document.getElementById("btnSiguiente");
const barra=document.getElementById("barra");
const porcentaje=document.getElementById("porcentaje");
const marcador=document.getElementById("puntos");
const contador=document.getElementById("contador");
const bonus=document.getElementById("bonus");
const tarjeta=document.getElementById("tarjeta");
const pantallaFinal=document.getElementById("pantallaFinal");
const puntosFinal=document.getElementById("puntosFinal");
const reiniciar=document.getElementById("reiniciar");


function mezclar(arreglo){

for(let i=arreglo.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[arreglo[i],arreglo[j]]=[arreglo[j],arreglo[i]];

}

return arreglo;

}


function generarOpciones(){

respuestaCorrecta=conceptos[indice].palabra;

let opciones=[respuestaCorrecta];

while(opciones.length<4){

let palabraAleatoria=conceptos[Math.floor(Math.random()*conceptos.length)].palabra;

if(!opciones.includes(palabraAleatoria)){

opciones.push(palabraAleatoria);

}

}

return mezclar(opciones);

}


function mostrarConcepto(){

const dato=conceptos[indice];

titulo.textContent=dato.palabra;

descripcion.textContent=dato.definicion;

contador.textContent="Concepto "+(indice+1)+" de "+conceptos.length;

mensaje.textContent="";

btnComenzar.textContent="❓ Responder";

btnComenzar.style.display="inline-block";

btnSiguiente.disabled=true;

zonaPregunta.classList.add("oculto");

}
/*=====================================
        MOSTRAR PREGUNTA
======================================*/

function mostrarPregunta(){

    let opciones = generarOpciones();

    pregunta.textContent =
    "¿Qué concepto corresponde a esta definición?";

    botones.forEach((boton,i)=>{

        boton.textContent=opciones[i];

        boton.disabled=false;

        boton.classList.remove("correcto");
        boton.classList.remove("incorrecto");

    });

    zonaPregunta.classList.remove("oculto");

    btnComenzar.style.display="none";

}


/*=====================================
        REVISAR RESPUESTA
======================================*/

function revisar(indiceBoton){

    let texto=botones[indiceBoton].textContent;

    if(texto===respuestaCorrecta){

        botones[indiceBoton].classList.add("correcto");

        mensaje.innerHTML="✅ ¡Correcto! +10 puntos";

        puntos+=10;

        progreso+=2;

        marcador.textContent=puntos;

        barra.style.width=progreso+"%";

        porcentaje.textContent=progreso+"%";

        bonus.classList.remove("animar");

        void bonus.offsetWidth;

        bonus.classList.add("animar");

        botones.forEach(b=>{

            b.disabled=true;

        });

        btnSiguiente.disabled=false;

    }

    else{

        botones[indiceBoton].classList.add("incorrecto");

        mensaje.innerHTML="❌ Incorrecto. Inténtalo otra vez.";

        tarjeta.classList.remove("error");

        void tarjeta.offsetWidth;

        tarjeta.classList.add("error");

    }

}


/*=====================================
        SIGUIENTE
======================================*/

function siguienteConcepto(){

    indice++;

    if(indice>=conceptos.length){

        terminarJuego();

        return;

    }

    mostrarConcepto();

}


/*=====================================
        TERMINAR
======================================*/

function terminarJuego(){

    tarjeta.classList.add("oculto");

    zonaPregunta.classList.add("oculto");

    mensaje.classList.add("oculto");

    btnComenzar.classList.add("oculto");

    btnSiguiente.classList.add("oculto");

    pantallaFinal.classList.remove("oculto");

    puntosFinal.textContent=puntos;

}
/*=====================================
        REINICIAR JUEGO
======================================*/

function reiniciarJuego(){

    indice=0;

    puntos=0;

    progreso=0;

    respuestaCorrecta="";

    marcador.textContent=0;

    barra.style.width="0%";

    porcentaje.textContent="0%";

    contador.textContent="Concepto 0 de "+conceptos.length;

    pantallaFinal.classList.add("oculto");

    tarjeta.classList.remove("oculto");

    mensaje.classList.remove("oculto");

    btnComenzar.classList.remove("oculto");

    btnSiguiente.classList.remove("oculto");

    zonaPregunta.classList.add("oculto");

    btnSiguiente.disabled=true;

    btnComenzar.style.display="inline-block";

    btnComenzar.textContent="▶ Comenzar";

    titulo.textContent="🛡 Academia de Ciberseguridad";

    descripcion.textContent="Aprenderás conceptos de Ciberseguridad y después demostrarás lo aprendido respondiendo el reto.";

    mensaje.textContent="";

}


/*=====================================
            EVENTOS
======================================*/

btnComenzar.addEventListener("click",()=>{

    if(btnComenzar.textContent==="▶ Comenzar"){

        mostrarConcepto();

    }

    else{

        mostrarPregunta();

    }

});


btnSiguiente.addEventListener("click",()=>{

    siguienteConcepto();

});


reiniciar.addEventListener("click",()=>{

    reiniciarJuego();

});


botones.forEach((boton,i)=>{

    boton.addEventListener("click",()=>{

        revisar(i);

    });

});


/*=====================================
            INICIO
======================================*/

btnSiguiente.disabled=true;

barra.style.width="0%";

porcentaje.textContent="0%";

marcador.textContent="0";

contador.textContent="Concepto 0 de "+conceptos.length;

mensaje.textContent="Presiona ▶ Comenzar para iniciar.";

titulo.textContent="🛡 Academia de Ciberseguridad";

descripcion.textContent="Aprende los conceptos de ciberseguridad y demuestra lo aprendido respondiendo correctamente cada desafío.";