// Write an async javascript function that writes every item in any given array with 1, 2,
// 4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
// seconds, “c” is printed in 4 seconds, ...

const array = ["a", "b", "c", "d", "e"];
 
async function printArrayWithDelays(arr) {
  let interval = 1000;
  for (let i of arr) {
    await new Promise(resolve => setTimeout(resolve, interval));
    console.log(i, interval);
    delay *= 2;
  }
}

printArrayWithDelays(array)

//Tambem daria pra resolver essa questao usando uma funcao recursiva dentro de um loop com o setTimeout, mas ai nao seria uma funcao assincrona. Ela e levemente melhor em questoes de performance porque ela nao cria uma promise nova a cada iteracao, mas aparentemente nao faz muita diferenca por causa do objetivo da atividade, entao tanto faz.

// function printArrayWithDelays(arr) {
//   let interval = 1000;
//   for (let i of arr) {
//     setTimeout(() => console.log(i), interval);
//     interval *= 2;
//   }
// }