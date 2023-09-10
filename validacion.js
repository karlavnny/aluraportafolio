const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
	e.preventDefault();

	validarDatos();
});


function validarDatos(){

	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const asuntoValue = asunto.value.trim();
	const mensajeValue = mensaje.value.trim();




    if (nombreValue==="" ) {
        alert("Campo nombre es obligatorio")  
        nombreValue.focus()

    }else if (emailValue==="") {
        alert("Campo e-mail es obligatorio")
        emailValue.focus() 

    }else if (asuntoValue==="" ) {
        alert("Campo Asunto es obligatorio")
        asuntoValue.focus() 

    }else if (mensajeValue==="" || mensajeValuelength < 51){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        mensajeValue.focus()

    } else if (emailValue.indexOf('@')==-1 ||
    emailValue.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    }


}