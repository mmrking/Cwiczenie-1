function procesujFormularz() {
  const osoba = {
    imie: document.getElementById("imie").value,
    nazwisko: document.getElementById("nazwisko").value,
    wiek: parseInt(document.getElementById("wiek").value),
  };

  console.log(osoba);
  console.log(osoba.imie, osoba.nazwisko, osoba.wiek);
  console.log(JSON.stringify(osoba));
}

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  wypisz() {
    return `${this.real} ${this.imaginary >= 0 ? "+" : "-"} ${Math.abs(this.imaginary)}i`;
  }
  module() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }
}

const generateRandomComplex = (n) =>
  Array.from(
    { length: n },
    () =>
      new ComplexNumber(
        Math.floor(Math.random() * 21) - 10,
        Math.floor(Math.random() * 21) - 10,
      ),
  );

const complexArray = generateRandomComplex(5);
console.log(
  "Tablica:",
  complexArray.map((c) => c.wypisz()),
);

const filtered = complexArray.filter((c) => c.real > 0 && c.imaginary > 0);
console.log(
  "Zad 4:",
  filtered.map((c) => c.wypisz()),
);

const mapped = complexArray.map((c) => new ComplexNumber(c.imaginary, c.real));
console.log(
  "Zad 5:",
  mapped.map((c) => c.wypisz()),
);

const sumModules = complexArray.reduce((acc, c) => acc + c.module(), 0);
console.log("Zad 6 (Suma):", sumModules);

const minModule = complexArray.reduce(
  (min, c) => Math.min(min, c.module()),
  complexArray[0].module(),
);
console.log("Zad 7 (Min):", minModule);

const maxModuleObj = complexArray.reduce((max, c) =>
  c.module() > max.module() ? c : max,
);
console.log("Zad 8 (Max obiekt):", maxModuleObj.wypisz());
