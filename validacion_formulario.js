const nombre = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const asunto = document.getElementById("asunto");
const text = document.getElementById("textarea");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(nombre.value == " " || nombre.value.length == 0 || nombre.value.length >= 50){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if(tel.value.length < 7){
        warnings += `El telefono no es valido <br>`;
        entrar = true;
    }
    if(asunto.value == " " || asunto.value.length == 0 || asunto.value.length >= 50){
        warnings += `El asunto no es valido <br>`;
        entrar = true;
    }
    if(text.value == " " || text.value.length > 300){
        warnings += `El texto no es valido <br>`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
});