// Elementos básicos para prueba
const elementos = [
  { nombre: "Hidrógeno", simbolo: "H", numero: 1 },
  { nombre: "Helio", simbolo: "He", numero: 2 },
  { nombre: "Litio", simbolo: "Li", numero: 3 },
  { nombre: "Carbono", simbolo: "C", numero: 6 },
  { nombre: "Oxígeno", simbolo: "O", numero: 8 }
];

let modo = "simbolo";
let seleccionado = null;

// Loader desaparece después de 900ms
setTimeout(() => {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}, 900);

function startGame() {
  modo = document.getElementById("modeSelector").value;

  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  nuevaPregunta();
}

function nuevaPregunta() {
  seleccionado = elementos[Math.floor(Math.random() * elementos.length)];

  let pregunta = "";

  if (modo === "simbolo") 
    pregunta = `Símbolo de: ${seleccionado.nombre}`;

  if (modo === "nombre") 
    pregunta = `Nombre del elemento: ${seleccionado.simbolo}`;

  if (modo === "numero") 
    pregunta = `Número atómico de: ${seleccionado.nombre}`;

  document.getElementById("question").textContent = pregunta;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim().toLowerCase();

  const correct =
    modo === "simbolo" ? seleccionado.simbolo.toLowerCase() :
    modo === "nombre"  ? seleccionado.nombre.toLowerCase() :
    modo === "numero"  ? String(seleccionado.numero) : "";

  if (ans === correct) {
    document.getElementById("result").textContent = "Correcto";
    setTimeout(nuevaPregunta, 600);
  } else {
    document.getElementById("result").textContent = `Incorrecto — era: ${correct}`;
  }
}
