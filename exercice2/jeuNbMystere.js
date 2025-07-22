const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let niveau = ""

function genererNombreMystere() {
  let max
  if (niveau === "facile") max = 50
  else if (niveau === "moyen") max = 100
  else max = 500

  return Math.floor(Math.random() * max ) + 1
}

let reponse = 0

function demanderDifficulte() {
  rl.question('Bienvenue dans le jeu du nombre mystère !\nChoisissez la difficulté\n', (answer) => {
    if (answer === "facile") niveau = answer
    else if (answer === "moyen") niveau = answer
    else if (answer === "difficile") niveau = answer
    else demanderDifficulte()
    reponse = genererNombreMystere()
    jouer()
  })
}

let tentative = 0

let nbTentatives = 0

function jouer() {
  console.log(reponse)
  rl.question('A quel nombre tu penses ? \n', (answer) => {
    tentative = parseInt(answer)
    if(isNaN(tentative)) {
      console.log("Veuillez entrer une valeur numérique !")
      nbTentatives += 1
      return jouer()
    }
    if(tentative === reponse) {
      console.log("Félicitation !")
      nbTentatives += 1
      creerSauvegarde()
      return rejouer()
    }
    else if (tentative > reponse) {
      console.log("Trop grand ! Réessayez")
      nbTentatives += 1
      return jouer()
    }
    else if (tentative <= reponse) {
      console.log("Trop petit ! Réessayez")
      nbTentatives += 1
      return jouer()
    }
  })
}

function rejouer() {
  rl.question("Voulez-vous faire une nouvelle partie ?\nRépondez 'o' pour 'oui' ou 'n' pour 'non'.\n", (answer) => {
    if(answer === 'o' || answer === 'oui') {
      return demanderDifficulte()
    }
    else {
      console.log('A bientôt !')
      return rl.close()
    }
  })
}

console.log(Date())

function creerSauvegarde() {
  let data = {
    date: Date(),
    tentatives: nbTentatives,
    nombreMystere: reponse,
  }
  const jsonData = JSON.stringify(data)
  fs.writeFileSync('score.json', jsonData)
  console.log("Partie sauvegardée dans score.json")
}

demanderDifficulte()