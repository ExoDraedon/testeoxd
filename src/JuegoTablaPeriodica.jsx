
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const CUSTOM = {
  primary: "#1e1e2f",
  accent: "#6c63ff",
  text: "#e4e4e4",
  card: "#ffffff",
  correct: "#4ade80",
  wrong: "#f87171",
};

const ELEMENTS = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hidr\u00f3geno",
    "mass": "1.008",
    "group": "No metal"
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helio",
    "mass": "4.003",
    "group": "Gas noble"
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Litio",
    "mass": "6.94",
    "group": "Metal alcalino"
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Berilio",
    "mass": "9.012",
    "group": "Alcalinot\u00e9rreo"
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boro",
    "mass": "10.81",
    "group": "Metaloide"
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbono",
    "mass": "12.01",
    "group": "No metal"
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitr\u00f3geno",
    "mass": "14.01",
    "group": "No metal"
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Ox\u00edgeno",
    "mass": "16.00",
    "group": "No metal"
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fl\u00faor",
    "mass": "19.00",
    "group": "Hal\u00f3geno"
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Ne\u00f3n",
    "mass": "20.18",
    "group": "Gas noble"
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodio",
    "mass": "22.99",
    "group": "Metal alcalino"
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesio",
    "mass": "24.31",
    "group": "Alcalinot\u00e9rreo"
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminio",
    "mass": "26.98",
    "group": "Metal"
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicio",
    "mass": "28.09",
    "group": "Metaloide"
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "F\u00f3sforo",
    "mass": "30.97",
    "group": "No metal"
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Azufre",
    "mass": "32.06",
    "group": "No metal"
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Cloro",
    "mass": "35.45",
    "group": "Hal\u00f3geno"
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Arg\u00f3n",
    "mass": "39.95",
    "group": "Gas noble"
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potasio",
    "mass": "39.10",
    "group": "Metal alcalino"
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcio",
    "mass": "40.08",
    "group": "Alcalinot\u00e9rreo"
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Escandio",
    "mass": "44.96",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanio",
    "mass": "47.87",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadio",
    "mass": "50.94",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Cromo",
    "mass": "52.00",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganeso",
    "mass": "54.94",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Hierro",
    "mass": "55.85",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalto",
    "mass": "58.93",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "N\u00edquel",
    "mass": "58.69",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Cobre",
    "mass": "63.55",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "mass": "65.38",
    "group": "Metal de transici\u00f3n"
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Galio",
    "mass": "69.72",
    "group": "Metal"
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanio",
    "mass": "72.63",
    "group": "Metaloide"
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Ars\u00e9nico",
    "mass": "74.92",
    "group": "Metaloide"
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenio",
    "mass": "78.97",
    "group": "No metal"
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromo",
    "mass": "79.90",
    "group": "Hal\u00f3geno"
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Kript\u00f3n",
    "mass": "83.80",
    "group": "Gas noble"
  }
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function JuegoTablaPeriodica() {
  return <div>Integrado en GitHub</div>;
}
