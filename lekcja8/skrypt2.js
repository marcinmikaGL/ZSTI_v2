function wyswietlTabliceRekurencyjnie(tablica) {
  for (let i = 0; i < tablica.length; i++) {
    if (Array.isArray(tablica[i])) {
      wyswietlTabliceRekurencyjnie(tablica[i]);
    } else {
      console.log(tablica[i]);
    }
  }
}

const mojaTablica = [
  [1, 2, 3],
  [4, [5, 6], 7],
  8,
];

wyswietlTabliceRekurencyjnie(tablica);
function wyswietlTabliceRekurencyjnie(tablica) {
  for (let i = 0; i < tablica.length; i++) {
    if (Array.isArray(tablica[i])) {
      wyswietlTabliceRekurencyjnie(tablica[i]);
    } else {
      console.log(tablica[i]);
    }
  }
}

const mojaTablica = [
  [1, 2, 3],
  [4, [5, 6], 7],
  8,
];

wyswietlTabliceRekurencyjnie(tablica);
