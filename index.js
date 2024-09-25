//EXEMPLO
//let nome = ' Daniel';
//if(nome){ if- se e else - se não
//    document.write('Seja Bem-vindo' +nome+ '!');
// }
// if(condiçao){ bloco de construção

//para que serve o prompt? ele mostra um quadrinho perguntando. o promtp está no scopo global, por isso ele aparece primeiro
// }


let nome;
 if(nome){ 
    document.write('Seja Bem-vindo' +nome+ '!');
 } else {
    document.write('Seja Bem-vindo!');
    
 }

//  let numero = prompt('Digite um número');

//  if(numero % 2 == 0){
//     console.log('É par');
//  } else {
//     console.log('É Ímpar')
//  }

 document.write('<br><br>') //isso é quebra de linha
let idade = prompt ('qual a sua idade?');
let habilitado = prompt ('Possui habilitação?');

if(idade >= 18 && habilitado == 'sim'){
 document.write ('pode dirigir')
} else{
 document.write ('não pode dirigir ainda');
}