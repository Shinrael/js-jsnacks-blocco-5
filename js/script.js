const zucchine = [
  {
    varietà: 'Zucchina verde',
    peso: 80,
    lunghezza: 15
  },
  {
    varietà: 'Zucchino romanesca',
    peso: 100,
    lunghezza: 16
  },
  {
    varietà: 'Zucchina napoletana',
    peso: 400,
    lunghezza: 17
  },
  {
    varietà: 'Zucchino fiorentino',
    peso: 180,
    lunghezza: 18
  },
  {
    varietà: 'Zucchina tonda',
    peso: 120,
    lunghezza: 13
  },
  {
    varietà: 'Zucchina trombetta',
    peso: 300,
    lunghezza: 14
  },
  {
    varietà: 'Zucchina pâtisson',
    peso: 210,
    lunghezza: 16
  },
  {
    varietà: 'Zucchino giallo',
    peso: 150,
    lunghezza: 15
  },
  {
    varietà: 'Zucchino rugoso friulano',
    peso: 280,
    lunghezza: 17
  },
  {
    varietà: 'Zucchina Crookneck',
    peso: 390,
    lunghezza: 18
  },
]
const output = document.querySelector('.output');
const pesoPiccole = document.querySelector('.peso-piccole');
const pesoGrandi = document.querySelector('.peso-grandi');

let pesoTotale = 0;

zucchine.forEach(zucchina => {
  pesoTotale += zucchina.peso;
  output.innerHTML = `
  Il peso totale delle zucchine è di ${parseInt(pesoTotale)} gr.
  `;
});

console.log('Peso totale', pesoTotale, 'grammi');

const zucchineLunghe = [];
const zucchinePiccole = [];
let pesoTotaleGrandi = 0;
let pesoTotalePiccole = 0;

zucchine.forEach(zucchina => {
  if (zucchina.lunghezza < 15 ) {
    zucchinePiccole.push(zucchina);
  } else {
    zucchineLunghe.push (zucchina);
  }
})

zucchineLunghe.forEach(zucchina => {
  pesoTotaleGrandi += zucchina.peso;
  pesoGrandi.innerHTML = `
  Il peso totale delle zucchine lunghe è di ${parseInt(pesoTotaleGrandi)} gr.
  `;
});

zucchinePiccole.forEach(zucchina => {
  pesoTotalePiccole += zucchina.peso;
  pesoPiccole.innerHTML = `
  Il peso totale delle zucchine piccole è di ${parseInt(pesoTotalePiccole)} gr.
  `;
});

const eman = reverseName('ciao');
console.log(eman);

const numeri = [1,2,3,4,5];
const lettere = ['a','b','c','d','e'];
const unicoArray = [];

for(let i = 0; i < numeri.length; i++){
  unicoArray.push(numeri[i]);
  unicoArray.push(lettere[i]);
}
console.log(unicoArray);



// FUNCTION

function reverseName(name) {
  return name.split('').reverse().join('');
}