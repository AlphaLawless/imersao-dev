let primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
let segundoValor = parseInt(prompt('Digite o segundo valor: '))
//Fazendo o menu para escolhemos a operação que queremos na calculadora

var operacao = prompt('Digite 1 para Soma, 2 para subtração, 3 para multiplicação e 4 para divisão')

//Valores das operações que vão ser feitas
if (operacao == 1){
    let resultado = primeiroValor + segundoValor
    document.write(`<h2>${primeiroValor} + ${segundoValor} = ${resultado}</h2>`)
}else if(operacao == 2){
    let resultado = primeiroValor - segundoValor
    document.write(`<h2>${primeiroValor} - ${segundoValor} = ${resultado}</h2>`)
}else if(operacao == 3){
    let resultado = primeiroValor * segundoValor
    document.write(`<h2>${primeiroValor} x ${segundoValor} = ${resultado}</h2>`)
}else if(operacao == 4){
    let resultado = primeiroValor / segundoValor
    document.write(`<h2>${primeiroValor} / ${segundoValor} = ${resultado}</h2>`)
}else {
    document.write('<h2>Opção Inválida!</h2>')
}
