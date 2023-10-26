const dataPoczatkowa = new Date("2023-10-26 00:00:00");
const dataKoncowa = new Date("2023-10-26 12:00:00");

// Obliczanie różnicy między datami w milisekundach
const roznicaWMillisekundach = dataKoncowa - dataPoczatkowa;

// Przeliczanie różnicy na sekundy
const roznicaWSekundach = roznicaWMillisekundach / 1000;

console.log("Różnica w sekundach: " + roznicaWSekundach);


function data(dane) {
 let skladnikiDaty = dane.split(".");
 let dzien = parseInt(skladnikiDaty[0], 10);
 let miesiac = parseInt(skladnikiDaty[1], 10) - 1; // Miesiące w JavaScript są indeksowane od zera, więc odejmujemy 1
 let rok = parseInt(skladnikiDaty[2], 10);
 return  new Date(rok, miesiac, dzien);
}
