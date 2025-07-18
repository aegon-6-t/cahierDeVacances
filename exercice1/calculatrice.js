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

let num1 =0

function premierNombre() {
  rl.question('Entrez le premier nombre : \n', (answer) => {
    num1 = parseInt(answer)
    if (!isNaN(num1)) {
      return num1 && deuxiemeNombre()
    }else {
      rl.setPrompt('Veuillez entrer une valeur numérique \n')
      rl.prompt()
      rl.on('line', (answer) => {
        num1 = parseInt(answer)
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

let num2 = 0

function deuxiemeNombre() {
  rl.question('Entrez le deuxième nombre : \n', (answer) => {
    num2 = parseInt(answer)
    if (!isNaN(num2)) {
      return num2 && calcul(num1, num2, operateur)
    }else if(num2 == 0 && operateur == "/") {
      rl.setPrompt('Division par 0 impossible, saisissez un autre nombre')
      rl.prompt()
      return deuxiemeNombre()
    }
    deuxiemeNombre()
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
  return resultat && rl.close()
}

rl.on('close', () => {
  console.log(`le resultat est ${resultat}`)
  resultat = 0
})

function calculatrice() {
  premiereQuestion()
}

calculatrice()
*/

let operateur = " "

function calculatrice() {
  rl.question('Choisissez une option : \n 1.Addition \n 2.Soustraction \n 3.Multiplication \n 4.Division \n 5.Quitter \n', (answer) => {
    switch (answer) {

      case "1":
        operateur = "+"
        console.log('Vous choisissez l\'addition')
        premierNombre()
        break;

      case "2":
        operateur = "-"
        console.log('Vous choisissez la soustraction')
        premierNombre()
        break;

      case "3":
        operateur = "*"
        console.log('Vous choisissez la multiplication')
        premierNombre()
        break;

      case "4":
        operateur = "/"
        console.log('Vous choisissez la division')
        premierNombre()
        break;

      case "5":
        console.log('Vous choisissez de quitter')
        rl.close()
        break;
    
      default:
        console.log('Choix invalide, veuillez réssayer')
        calculatrice()
        break;
    }
  })
}

let num1 = 0

function premierNombre() {
  rl.question('Entrez le premier nombre : ', (answer) => {
    num1 = parseInt(answer)
    if (!isNaN(num1)) {
      return num1 && deuxiemeNombre()
    } else {
      console.log('Veuillez entrer un nombre valide.')
      premierNombre()
    }
  })
}

let num2 = 0

function deuxiemeNombre() {
  rl.question('Entrez le deuxième nombre : ', (answer) => {
    num2 = parseInt(answer)
    if (isNaN(num2)) {
      console.log('Veuillez entrer un nombre valide.')
      deuxiemeNombre()
    } else if (operateur == '/' && num2 == 0) {
      console.log("Vous ne pouvez pas diviser par zéro, veuillez entrer un autre nombre")
      deuxiemeNombre()
    } else {
      return num2 && calcul(num1, num2, operateur) && rl.close()
    }
  })
}

let resultat = 0

function calcul(param1, param2, param3) {
  switch (param3) {

    case "+":
      resultat = addition(num1, num2)
      break;

    case "-":
      resultat = soustraction(num1, num2)
      break;

    case "*":
      resultat = multiplication(num1, num2)
      break;

    case "/":
      resultat = division(num1, num2)
      break;
  }
  console.log(`Le resultat est ${resultat} \n`)
  calculatrice()
}

calculatrice()





