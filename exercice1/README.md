# Exercice 1 - Calculatrice en console (node.js)

Après quelques heures à essayer des choses, la principale difficulté rencontré est de comprendre comment fonction l'interface readline, et comment intéragir avec la fonction après la query. Et je pense que plus le code va etre long plus la difficulté va être de gerer la lisibilité, beaucoup de "question" et de choses reutilisées(il faudra trouver la solution pour rentre tout cela modulable).

Un autre difficulté rencontrée est la gestion des erreurs d'input. Pour l'instant mon code n'est pas très lisible et en plus de ca il y a des répétitions inutiles avec les rl.on('line') qui refont la logique de question/verification d'input. Je pense qu'une piste à explorer est d'implémenter encore plus de recursivité (dédicace à Pablo), en faisant se rappeler la fonction elle même si l'input n'est pas correct. Bonne piste à explorer ça part sur une refonte je crois.
