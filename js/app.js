


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const form_sign_up = document.querySelector(".sign-up-form")

const input_nombre = document.querySelector("#nombre");
const input_apellidos = document.querySelector("#apellidos");
const input_correo = document.querySelector("#correo");
const input_password = document.querySelector("#password");
const input_confirmar_password = document.querySelector("#confirmar-password");

const btn_registrarse = document.querySelector("#btn_registrarse");

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
/* 
expresion regular
*/



function mensajerError(mensaje="") {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.classList.add("mensaje-error")
    form_sign_up.insertBefore(alerta, btn_registrarse)
    setTimeout(() => alerta.remove(), 4000)
}


btn_registrarse.addEventListener("click", e => {
    if(
        !input_nombre.value ||
        !input_apellidos.value ||
        !input_correo.value ||
        !input_password.value ||
        !input_confirmar_password.value
    ) {
        e.preventDefault();
        mensajerError("Los campos no pueden ir vacios");
    }

    if (input_password.value !== input_confirmar_password.value) {
        e.preventDefault();
        mensajerError('Las contraseñas no coinciden');
        
    }

    if (!emailRegex.test(input_correo.value)) {
        e.preventDefault();
        mensajerError("El correo no es valido, intentelo de nuevo")
    }
    
});




sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});