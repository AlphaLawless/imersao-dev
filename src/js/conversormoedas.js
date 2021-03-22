 let valorEmDolar = prompt('Qual o valor em dolar que você quer converter?')
 let valorEmDolarNumero = parseFloat(valorEmDolar)
 alert(`US$ ${valorEmDolarNumero} dolares`)

 let valorEmReal = valorEmDolarNumero * 5.65
 let valorEmRealFixado = valorEmReal.toFixed(2)
 alert(`R$ ${valorEmRealFixado} reais`)
