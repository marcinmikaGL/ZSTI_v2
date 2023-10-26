const dataPoczatkowa = new Date("2023-10-26 00:00:00");
const dataKoncowa = new Date("2023-10-26 12:00:00");

// Obliczanie różnicy między datami w milisekundach
const roznicaWMillisekundach = dataKoncowa - dataPoczatkowa;

// Przeliczanie różnicy na sekundy
const roznicaWSekundach = roznicaWMillisekundach / 1000;

console.log("Różnica w sekundach: " + roznicaWSekundach);
