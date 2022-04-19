function habilitar(){
    const text = document.getElementById("textarea");
    let valor = 0;

    if (text == ""){
        valor++;
    }

    if(valor == 0){
        document.getElementById("boton").disabled = false;
    }else{
        document.getElementById("boton").disabled = true;
    }
}

document.getElementById("textarea").addEventListener("keyup", habilitar);
document.getElementById("boton").addEventListener("click", ()=>{
    console.log("Haz completado el formulario");
})