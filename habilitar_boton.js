function habilitar() {
  const text = document.getElementById("textarea");
  let valor = 0;

  if (text == "") {
    valor++;
  }

  if (valor == 0) {
    document.getElementById("button").disabled = false;
  } else {
    document.getElementById("button").disabled = true;
  }
}

document.getElementById("textarea").addEventListener("keyup", habilitar);
document.getElementById("button").addEventListener("click", () => {
  console.log("Haz completado el formulario");
});
