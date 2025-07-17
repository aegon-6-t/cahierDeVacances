const readline = require('readline');

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
  if (!isNaN(num1)) {
    rl.question('Entrez le deuxième chiffre : \n', (answer) => {
      console.log('deuxieme question atteinte')
    })
  }else {
    rl.setPrompt('Veuillez entrer une valeur numérique \n')
    rl.prompt()
    rl.on('line', (answer) => {
      const num1 = parseInt(answer)
      if(isNaN(num1)) {
        rl.setPrompt('Veuillez entrer une valeur numérique \n')
        rl.prompt()
      }  
    })
  }
})






