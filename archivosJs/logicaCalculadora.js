function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

function limpiar() {
  document.getElementById("pantalla").value = "";
}

function calcular() {
  let resultado = document.getElementById("pantalla").value;
  try {
    document.getElementById("pantalla").value = eval(resultado);
  } catch {
    document.getElementById("pantalla").value = "Error";
  }
}
