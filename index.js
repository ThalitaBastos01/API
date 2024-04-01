const { uniq } = require('lodash');
const {arrayNumeros, arrayLetras} = require('./array');

console.log(arrayNumeros);
console.log(arrayLetras);



// const array = [1, 2, 4, 4, 6, 7, 1];

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica);
