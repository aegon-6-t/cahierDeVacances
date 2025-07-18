const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const validOperators = ["+", "-", "*", "/"]

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


/*
Je garde ça au cas ou je foire le reste

rl.question('Entrez le premier chiffre : \n', (answer) => {
  const num1 = parseInt(answer)
  if (!isNaN(num1)) {
    rl.question('Entrez le deuxième chiffre : \n', (answer) => {
      const num2 = parseInt(answer)
      if (!isNaN(num2)) {
        rl.question('Saisissez un opérateur \n', (answer) => {
          if (validOperators.includes(answer)) {
            if(answer == '+') {
              const operation = addition(num1, num2)
              console.log(`${num1} + ${num2} = ${operation}`)
              rl.close()
            }
            else if(answer == '-') {
              const operation = soustraction(num1, num2)
              console.log(`${num1} - ${num2} = ${operation}`)
              rl.close()
            }
            else if(answer == '*') {
              const operation = multiplication(num1, num2)
              console.log(`${num1} * ${num2} = ${operation}`)
              rl.close()
            }
            else if(answer == '/') {
              const operation = division(num1, num2)
              console.log(`${num1} / ${num2} = ${operation}`)
              rl.close()
            }
          }else {
            rl.setPrompt('L\'opérateur saisi n\'est pas correct, réessayez \n')
            rl.prompt()
            rl.on('line', (answer) => {
              if (validOperators.includes(answer)) {
                if(answer == '+') {
                  const operation = addition(num1, num2)
                  console.log(`${num1} + ${num2} = ${operation}`)
                  rl.close()
                }
                else if(answer == '-') {
                  const operation = soustraction(num1, num2)
                  console.log(`${num1} - ${num2} = ${operation}`)
                  rl.close()
                }
                else if(answer == '*') {
                  const operation = multiplication(num1, num2)
                  console.log(`${num1} * ${num2} = ${operation}`)
                  rl.close()
                }
                else if(answer == '/') {
                  const operation = division(num1, num2)
                  console.log(`${num1} / ${num2} = ${operation}`)
                  rl.close()
                }
              }else {
                rl.setPrompt('L\'opérateur saisi n\'est pas correct, réessayez \n')
                rl.prompt()
              }
            })
          }
        })
      }else {
        rl.setPrompt('Veuillez entrer une valeur numérique \n')
        rl.prompt()
        rl.on('line', (answer) => {
          const num2 = parseInt(answer)
          if(isNaN(num2)) {
            rl.setPrompt('Veuillez entrer une valeur numérique \n')
            rl.prompt()
          }  
        })
      }
    })
  }else {
    rl.setPrompt('Veuillez entrer une valeur numérique \n')
    rl.prompt()
    rl.on('line', (answer) => {
      const num1 = parseInt(answer)
      if(isNaN(num1)) {
        rl.setPrompt('Veuillez entrer une valeur numérique \n')
        rl.prompt()
      }else {
        rl.question('Entrez le deuxième chiffre : \n', (answer) => {
          const num2 = parseInt(answer)
          if (!isNaN(num2)) {
            rl.question('Saisissez un opérateur', (answer) => {
              console.log('on est à l\'opérateur')
            })
          }else {
            rl.setPrompt('Veuillez entrer une valeur numérique \n')
            rl.prompt()
            rl.on('line', (answer) => {
              const num2 = parseInt(answer)
              if(isNaN(num2)) {
                rl.setPrompt('Veuillez entrer une valeur numérique \n')
                rl.prompt()
              }  
            })
          }
        })
      }  
    })
  }
})
*/

let operateur = ""

function premiereQuestion() {
  rl.question('Choisi ton opérateur: \n 1.Addition \n 2.Soustraction \n 3.Multiplication \n 4.Division \n 5.Quitter \n', (answer) => {
    const choix = answer
    switch (choix) {
      case '1':
        console.log("Vous avez choisi l'addition")
        operateur = "+"
        premierNombre()
        break; 
      case '2':
        console.log("Vous avez choisi la soustraction")
        operateur = "-"
        premierNombre()
        break;
      case '3':
        console.log("Vous avez choisi la multiplication")
        operateur = "*"
        premierNombre()
        break;
      case '4':
        console.log("Vous avez choisi la division")
        operateur = "/";
        premierNombre()
        break;
      case '5':
        console.log("Vous avez choisi de quitter")
        rl.close();
        break;
    
      default:
        console.log("Opérateur invalide, réessayez")
        premiereQuestion()
        break;
    }
  })
  return operateur
}

let num1 = 0

function premierNombre() {
  rl.question('Entrez le premier nombre : \n', (answer) => {
    const num1 = parseInt(answer)
    if (!isNaN(num1)) {
      deuxiemeNombre()
      return num1
    }else {
      rl.setPrompt('Veuillez entrer une valeur numérique \n')
      rl.prompt()
      rl.on('line', (answer) => {
        const num1 = parseInt(answer)
        if(isNaN(num1)) {
          rl.setPrompt('Veuillez entrer une valeur numérique \n')
          rl.prompt()
        }else {
          return num1 && deuxiemeNombre()
        }  
      })
    }
  })
}

function deuxiemeNombre() {
  rl.question('Entrez le deuxième nombre : \n', (answer) => {
    const num2 = parseInt(answer)
    if (!isNaN(num2)) {
      calcul(num1, num2, operateur)
      return num2
    }else {
      rl.setPrompt('Veuillez entrer une valeur numérique \n')
      rl.prompt()
      rl.on('line', (answer) => {
        const num2 = parseInt(answer)
        if(isNaN(num2)) {
          rl.setPrompt('Veuillez entrer une valeur numérique \n')
          rl.prompt()
        }else {
          return num2 && calcul(num1, num2, operateur)
        }
      })
    }
  })
}

let resultat = 0

function calcul(param1, param2, param3) {
  switch (param3) {
    case "+":
      resultat = addition(param1, param2)
      break;
    case "-":
      resultat = soustraction(param1, param2)
      break;
    case "*":
      resultat = multiplication(param1, param2)
      break;
    case "/":
      resultat = division(param1, param2)
      break;
  }
  return resultat && rl.close
}

premiereQuestion()








