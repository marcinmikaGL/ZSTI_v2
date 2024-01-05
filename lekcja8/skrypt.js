
tablica = [
  [1,2,3,"kopytko"],
  [1,3,5,"pierogi"],
  [6,6,6,"racuchy"],
];
i = 0;
let tab;
tab2 = {};
jestemRekurancja(tablica);

function jestemRekurancja(tab) {
  if(tab === undefined) { 
    return;
  } else {
    i++;
    tab2[i] = {key:"a"+i, value:tab[i] }; 
    jestemRekurancja(tab[i]);
  }
}
console.log(tab2);

