const idade = Math.random()*10;
let idadeInteira = idade.toFixed(0) * idade.toFixed(0);


/* console.log(idade)
console.log(idadeInteira) */

if(idadeInteira < 18) {
    console.log('Idade:' '+idadeInteira+'\n'+' 'Pessoa menor de idade')
}
else if(idadeInteira > 59)