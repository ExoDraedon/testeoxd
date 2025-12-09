
const elements = [
  { name: "Hidrógeno", symbol: "H" },
  { name: "Helio", symbol: "He" },
  { name: "Litio", symbol: "Li" },
  { name: "Berilio", symbol: "Be" },
  { name: "Boro", symbol: "B" },
  { name: "Carbono", symbol: "C" },
  { name: "Nitrógeno", symbol: "N" },
  { name: "Oxígeno", symbol: "O" },
  { name: "Flúor", symbol: "F" },
  { name: "Neón", symbol: "Ne" }
];

let currentElement = null;
let mode = "";

function startGame(selectedMode) {
  mode = selectedMode;
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("modeTitle").innerText =
    selectedMode === "clasico" ? "Modo Clásico" :
    selectedMode === "tiempo" ? "Modo Contra Reloj" :
    "Modo Survival";

  nextQuestion();
}

function nextQuestion() {
  currentElement = elements[Math.floor(Math.random() * elements.length)];
  document.getElementById("question").innerText =
    "Símbolo de: " + currentElement.name;
  document.getElementById("result").innerText = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim();
  if (ans === currentElement.symbol) {
    document.getElementById("result").innerText = "Correcto";
    nextQuestion();
  } else {
    document.getElementById("result").innerText = "Incorrecto";
    if (mode === "survival") backToMenu();
  }
}

function backToMenu() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}
