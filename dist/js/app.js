import { Negociacao } from './models/negociacao.js';

//alert("Kon'nichiwa sekai!")

const negociacao = new  Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);