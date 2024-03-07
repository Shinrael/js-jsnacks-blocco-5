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
let pesoTotale = 0;

zucchine.forEach(zucchina => {
  pesoTotale += zucchina.peso;
  output.innerHTML = `
  Il peso totale delle zucchine è di ${parseInt(pesoTotale)} gr.
  `;
});

console.log('Peso totale', pesoTotale, 'grammi');