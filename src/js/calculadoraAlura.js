let primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
let segundoValor = parseInt(prompt('Digite o segundo valor: '))
//Fazendo o menu para escolhemos a operação que queremos na calculadora
let resultado = primeiroValor * segundoValor

//Imprime o resultado no campo da calculadora
document.write(`<h2>${primeiroValor} x ${segundoValor} = ${resultado}</h2>`)