const palabras = [

{
palabra:"Adware",
definicion:"Programa que muestra publicidad automática mientras se utiliza una aplicación o se navega por Internet."
},

{
palabra:"AES",
definicion:"Algoritmo de cifrado muy seguro utilizado para proteger información y comunicaciones digitales."
},

{
palabra:"Antispyware",
definicion:"Software que detecta y elimina programas espía que recopilan información sin autorización."
},

{
palabra:"Ataque dirigido",
definicion:"Ciberataque planeado específicamente contra una persona, empresa u organización."
},

{
palabra:"Ataque homográfico",
definicion:"Técnica que utiliza sitios web falsos con nombres muy parecidos a los originales para engañar usuarios."
},

{
palabra:"Auditoría de seguridad",
definicion:"Revisión de sistemas informáticos para detectar vulnerabilidades y mejorar la protección de datos."
},

{
palabra:"Autenticidad",
definicion:"Garantía de que una persona, documento o información es verdadera y legítima."
},

{
palabra:"Autoridad de certificación",
definicion:"Entidad que emite certificados digitales para verificar identidades en Internet."
},

{
palabra:"Backdoor (Puerta trasera)",
definicion:"Acceso oculto a un sistema que permite entrar sin seguir los procedimientos normales."
},

{
palabra:"Backup (Copia de seguridad)",
definicion:"Respaldo de información que permite recuperarla en caso de pérdida o daño."
},

{
palabra:"Biometría",
definicion:"Método de identificación basado en características físicas como huellas dactilares, rostro o iris."
},

{
palabra:"Bluetooth",
definicion:"Tecnología inalámbrica que permite conectar dispositivos a corta distancia para intercambiar información."
},

{
palabra:"Botnet",
definicion:"Conjunto de dispositivos infectados que son controlados de forma remota por un atacante."
},

{
palabra:"Bug",
definicion:"Error o falla en un programa que puede provocar comportamientos inesperados."
},

{
palabra:"BYOD (Bring Your Own Device)",
definicion:"Práctica que permite a los empleados usar sus dispositivos personales para trabajar."
},

{
palabra:"Captcha",
definicion:"Prueba utilizada para comprobar que quien accede a un sistema es una persona y no un robot."
},

{
palabra:"CERT",
definicion:"Equipo especializado en prevenir, detectar y responder a incidentes de seguridad informática."
},

{
palabra:"Certificado digital",
definicion:"Documento electrónico que confirma la identidad de una persona, empresa o sitio web."
},

{
palabra:"Ciberataque",
definicion:"Acción maliciosa dirigida a dañar, alterar o acceder sin autorización a sistemas informáticos."
},

{
palabra:"Ciberdelincuente",
definicion:"Persona que utiliza medios tecnológicos para cometer actividades ilegales en Internet."
},

{
palabra:"Cifrado asimétrico",
definicion:"Método de cifrado que utiliza una clave pública para cifrar y una clave privada para descifrar."
},

{
palabra:"Clave privada",
definicion:"Clave secreta utilizada para acceder o descifrar información protegida."
},

{
palabra:"Cloud Computing",
definicion:"Tecnología que permite almacenar y utilizar recursos informáticos a través de Internet."
},

{
palabra:"Cookie",
definicion:"Archivo que guarda información sobre la actividad y preferencias de navegación de un usuario."
},

{
palabra:"Correo spam",
definicion:"Mensaje electrónico no solicitado, generalmente con fines publicitarios o fraudulentos."
},

{
palabra:"Cracker",
definicion:"Persona que accede ilegalmente a sistemas informáticos para causar daños o robar información."
},

{
palabra:"Criptografía",
definicion:"Conjunto de técnicas utilizadas para proteger información mediante cifrado."
},

{
palabra:"Datos personales",
definicion:"Información que permite identificar directa o indirectamente a una persona."
},

{
palabra:"Defacement",
definicion:"Modificación no autorizada de una página web para alterar su contenido original."
},

{
palabra:"DNS (Domain Name System)",
definicion:"Sistema que traduce nombres de dominio, como google.com, en direcciones IP."
},

{
palabra:"DNS Spoofing",
definicion:"Ataque que falsifica respuestas del sistema DNS para redirigir a los usuarios a sitios web fraudulentos."
},

{
palabra:"Doble factor de autenticación (2FA)",
definicion:"Método de seguridad que requiere dos formas de verificación para acceder a una cuenta."
},

{
palabra:"Escalada de privilegios",
definicion:"Técnica utilizada para obtener permisos superiores a los autorizados dentro de un sistema."
},

{
palabra:"Esteganografía",
definicion:"Método para ocultar información dentro de archivos como imágenes, videos o audios."
},

{
palabra:"Exploit",
definicion:"Programa o código que aprovecha una vulnerabilidad para atacar un sistema."
},

{
palabra:"Firmware",
definicion:"Software básico incorporado en dispositivos electrónicos que controla su funcionamiento."
},

{
palabra:"Fuga de datos",
definicion:"Pérdida o divulgación de información confidencial sin autorización."
},

{
palabra:"Gestor de contraseñas",
definicion:"Aplicación que almacena y administra contraseñas de forma segura."
},

{
palabra:"Gusano",
definicion:"Tipo de malware que se replica automáticamente y se propaga por redes y dispositivos."
},

{
palabra:"Hash",
definicion:"Valor generado mediante un algoritmo que representa de forma única un conjunto de datos."
},

{
palabra:"Honeypot",
definicion:"Sistema diseñado para atraer atacantes y estudiar sus métodos sin poner en riesgo sistemas reales."
},

{
palabra:"HTTPS",
definicion:"Versión segura del protocolo HTTP que cifra la información transmitida entre el usuario y el sitio web."
},

{
palabra:"Ingeniería social",
definicion:"Técnica que manipula a las personas para obtener información confidencial o acceso a sistemas."
},

{
palabra:"Integridad",
definicion:"Principio de seguridad que garantiza que los datos no han sido modificados de manera no autorizada."
},

{
palabra:"IoT (Internet de las Cosas)",
definicion:"Red de dispositivos conectados a Internet que pueden intercambiar información entre sí."
},

{
palabra:"Keylogger",
definicion:"Programa o dispositivo que registra las teclas pulsadas por un usuario para capturar información."
},

{
palabra:"Lista negra",
definicion:"Conjunto de usuarios, direcciones o elementos bloqueados por considerarse riesgosos."
},

{
palabra:"Malware",
definicion:"Software malicioso diseñado para dañar, alterar o acceder sin autorización a sistemas informáticos."
},

{
palabra:"Phishing",
definicion:"Técnica fraudulenta que busca obtener datos personales haciéndose pasar por una entidad confiable."
},

{
palabra:"Ransomware",
definicion:"Tipo de malware que bloquea o cifra archivos y exige un pago para recuperarlos."
}

];

palabras.sort((a,b)=>a.palabra.localeCompare(b.palabra));

const glosario = document.getElementById("glosario");

function mostrar(lista){

glosario.innerHTML="";

lista.forEach(item=>{

glosario.innerHTML += `
<div class="tarjeta">
    <h2>${item.palabra}</h2>
    <p>${item.definicion}</p>
</div>
`;

});

}

mostrar(palabras);

document.getElementById("buscador").addEventListener("keyup",function(){

const texto=this.value.toLowerCase();

const resultado=palabras.filter(item=>

item.palabra.toLowerCase().includes(texto) ||
item.definicion.toLowerCase().includes(texto)

);

mostrar(resultado);

});

document.getElementById("modo").addEventListener("click",()=>{

document.body.classList.toggle("oscuro");

const boton=document.getElementById("modo");

if(document.body.classList.contains("oscuro")){
    boton.textContent="☀️ Modo Claro";
}else{
    boton.textContent="🌙 Modo Oscuro";
}

});