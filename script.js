// Datos mínimos (puedo agregar los 118 elementos si quieres)
const elementos = [
  { nombre: "Hidrógeno", simbolo: "H", numero: 1 },
  { nombre: "Helio", simbolo: "He", numero: 2 },
  { nombre: "Litio", simbolo: "Li", numero: 3 },
  { nombre: "Berilio", simbolo: "Be", numero: 4 },
  { nombre: "Boro", simbolo: "B", numero: 5 },
  { nombre: "Carbono", simbolo: "C", numero: 6 },
  // puedo agregar 118 si quieres
];

let modo = "simbolo";
let elementoActual = null;

// Oculta el loader después de 1 segundo
setTimeout(() => {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("mainMenu").classList.remove("hidden");
}, 1000);

function startGame() {
  modo = document.getElementById("modeSelector").value;

  document.getElementById("mainMenu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  nuevaPregunta();
}

function nuevaPregunta() {
  elementoActual = elementos[Math.floor(Math.random() * elementos.length)];

  let pregunta = "";

  if (modo === "simbolo") pregunta = `¿Cuál es el símbolo de ${elementoActual.nombre}?`;
  if (modo === "nombre") pregunta = `¿Cuál es el nombre del elemento con símbolo ${elementoActual.simbolo}?`;
  if (modo === "numero") pregunta = `¿Cuál es el número atómico de ${elementoActual.nombre}?`;

  document.getElementById("question").innerText = pregunta;
  document.getElementById("answerInput").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const respuesta = document.getId("answerInput").value.trim().toLowerCase();
  const correcto =
    modo === "simbolo" ? elementoActual.simbolo.toLowerCase() :
    modo === "nombre"  ? elementoActual.nombre.toLowerCase() :
    modo === "numero"  ? String(elementoActual.numero) :
    "";

  if (respuesta === correcto) {
    document.getElementById("result").innerText = "Correcto!";
    setTimeout(nuevaPregunta, 800);
  } else {
    document.getElementById("result").innerText = `Incorrecto. Era: ${correcto}`;
  }
}

function applyColors() {
  document.body.style.background = document.getElementById("colorFondo").value;
  document.body.style.color = document.getElementById("colorTexto").value;
}
