function typeWriter(element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => element.innerHTML += letra, 75 * i)
  })
}

let numeroSecreto = parseInt(Math.random() * 10)
let tentativas = 3

while (tentativas > 0) {
  let chute = parseInt(prompt('Digite um numero de 0 à 10'))

  if (chute == numeroSecreto) {
    let result = document.querySelector('.result')
    result.innerHTML = 'Você acertou!'
    typeWriter(result)
    break
  } else if (chute > numeroSecreto) {
    alert('O número Secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('O número Secreto é maior')
  }
  tentativas--
  if (tentativas == 0) {
    let result = document.querySelector('.result')
    result.innerHTML = `Você errou todas! O número secreto era ${numeroSecreto}`
    typeWriter(result)
  }
}

