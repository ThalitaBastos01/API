const { getCityFromZipcode } = require('utils-playground');

//sincrono
// console.log('inicio');

// for (let index = 1; index <= 5; index++) {
//     console.log(index)
// };

// console.log('fim');

//assicrona

// console.log('inicio');

// getCityFromZipcode('05185420').then(cidade => {
//     console.log(cidade);   
// });

// console.log('fim');

//promise = promessa
const cidade = getCityFromZipcode('05185420');

console.log(cidade);