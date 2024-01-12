const Osoba = function(imie, nazwisko, wiek) {
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.wiek = wiek;

  this.toString = function() {
    return `Imię: ${this.imie}, nazwisko: ${this.nazwisko}, wiek: ${this.wiek}`;
  };
};

const osoba = new Osoba("Jan", "Kowalski", 30);

console.log(osoba.toString());

const Osoba = function(imie, nazwisko, wiek) {
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.wiek = wiek;
};

Object.defineProperty(Osoba.prototype, "toString", {
  value: function() {
    return `Imię: ${this.imie}, nazwisko: ${this.nazwisko}, wiek: ${this.wiek}`;
  },
});

const osoba = new Osoba("Jan", "Kowalski", 30);

console.log(osoba.toString());


