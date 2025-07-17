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


rl.question('Entrez le premier chiffre : \n', (answer) => {
  const num1 = parseInt(answer)
  if (isNaN(num1) == true) {
    rl.setPrompt('Veuillez entrer une valeur numérique \n')
    rl.prompt()
    rl.on('line', (answer) => {
      const num1 = parseInt(answer)
      if(isNaN(num1)) {
        rl.setPrompt('Veuillez entrer une valeur numérique \n')
        rl.prompt()
      }
      else {
        return num1 && rl.close()
      }  
    })
  }
  else {
    return num1 && rl.close()
  }
})





