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






