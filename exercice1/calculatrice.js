const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/*
rl.question('Tape qq chose...', function(answer) {
  console.log('Tu as tapé :', answer)
  rl.close()
})
*/

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

const num1 = 6
const num2 = 4
console.log(addition(num1, num2))
console.log(soustraction(num1, num2))
console.log(multiplication(num1, num2))
console.log(division(num1, num2))



