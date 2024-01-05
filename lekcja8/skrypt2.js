function wyswietlTabliceRekurencyjnie(tablica) {
  for (let i = 0; i < tablica.length; i++) {
    if (Array.isArray(tablica[i])) {
      // JeÅli element jest tablicÄ, wywoÅaj funkcjÄ rekurencyjnie
      wyswietlTabliceRekurencyjnie(tablica[i]);
    } else {
      // JeÅli element nie jest tablicÄ, wyÅwietl jego wartoÅÄ
      console.log(tablica[i]);
    }
  }
}

// PrzykÅadowa tablica podwÃ³jnie zÅoÅ¼ona
const mojaTablica = [
  [1, 2, 3],
  [4, [5, 6], 7],
  8,
];

// WywoÅanie funkcji rekurencyjnej
wyswietlTabliceRekurencyjnie(tablica);
