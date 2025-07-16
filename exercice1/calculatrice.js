const readline = require('readline');

let num1 = 0
let num2 = 0

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function addition(param1, param2) {
  return param1 + param2
}

function soustraction(param1, param2) {
  return param1 - param2
}

function multiplication(param1, param2) {
  return param1 * param2
}

function division(param1, param2) {
  return param1 / param2
}


rl.question('Entrez le premier chiffre :', (userInput) => {
  if (isNaN(parseInt(userInput)) == true) {
    rl.setPrompt('Veuillez entrer une valeur numérique')
    rl.prompt()
  }
  rl.question('Entrez le deuxième chiffre :', (answer) => {
    num2 = parseInt(answer)

    console.log(addition(num1, num2))
    rl.close()
  })
})





