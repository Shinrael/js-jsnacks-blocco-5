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
    pesoTotalePiccole += zucchina.peso;
    pesoPiccole.innerHTML = `
  Il peso totale delle zucchine piccole è di ${parseInt(pesoTotalePiccole)} gr.
  `;
  } else {
    zucchineLunghe.push (zucchina);
    pesoTotaleGrandi += zucchina.peso;
  pesoGrandi.innerHTML = `
  Il peso totale delle zucchine lunghe è di ${parseInt(pesoTotaleGrandi)} gr.
  `;
  }
})

// zucchineLunghe.forEach(zucchina => {
//   pesoTotaleGrandi += zucchina.peso;
//   pesoGrandi.innerHTML = `
//   Il peso totale delle zucchine lunghe è di ${parseInt(pesoTotaleGrandi)} gr.
//   `;
// });

// zucchinePiccole.forEach(zucchina => {
//   pesoTotalePiccole += zucchina.peso;
//   pesoPiccole.innerHTML = `
//   Il peso totale delle zucchine piccole è di ${parseInt(pesoTotalePiccole)} gr.
//   `;
// });

const reverseOutput = document.querySelector('.reverse');
const eman = reverseName('ciao');
console.log(eman);
reverseOutput.innerHTML = `
La parola al contrario è ${eman}.
`;

const numeri = [1,2,3,4,5];
const lettere = ['a','b','c','d','e'];
const unicoArray = [];

const maggioreLunghezza = numeri.length > lettere.length ? numeri.length : lettere.length;

for(let i = 0; i < maggioreLunghezza; i++){
  if(numeri[i])unicoArray.push(numeri[i]);
  if(lettere[i])unicoArray.push(lettere[i]);
}

const fusionArray = document.querySelector('.fusion-array');
fusionArray.innerHTML = `
Il mio array fuso è ${unicoArray}.
`;


const numeri2 = [1,2,3,4,5,6,7,8,9,10];
const a = 3;
const b = 6;
const finalResult = document.querySelector('.final-result');
const risultatoFinale = estrazione(numeri2, a, b);
finalResult.innerHTML = `
Il risultato finale dell'estrazione è ${risultatoFinale} !
`



// FUNCTION

function reverseName(name) {
  return name.split('').reverse().join('');
}

function estrazione(array, a, b){
  if(a < 0 || b>= array.length || a >= b){
    return [];
  }

  const risultatoFinale = [];

  for(let i = a; i <= b; i++){
    risultatoFinale.push(array[i]);
  }
  return risultatoFinale;
}