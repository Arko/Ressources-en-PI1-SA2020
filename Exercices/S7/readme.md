# S7 – Jeu: Pizza Mystère

But: Coder ensemble un mini-jeu de Pizzeria avec un client indécis.

La base de code est étudiée en cours, elle sert de support aux exercices

## Résumé

Un jeu dans lequel le joueur incarne un pizzaïolo. Celui doit deviner la bonne recette de pizza pour un client indécis et peu communicatif.

Le jeu est gagné dès que le client est satisfait.

## Déroulement

1. Un client se présente et demande une pizza
2. Le joueur choisi plusieurs garnitures parmi un choix prédéfini
3. Il propose cette pizza au client qui réagi positivement ou négativement en fonction de la recette proposée. Seulement trois types de réponses sont possibles:
    1. Trop ou pas assez d'ingrédients
    2. Le client n'aime pas un des ingrédients proposés
    3. C'est la bonne pizza, le client est content ! (fin de la partie)

## Implémentation en trois phases

1. Initialisation (des variables et références)
2. Mise en place (des éléments, fonctions et événements)
3. Interaction (avec l'utilisateur)

## Documentation 

Méthodes de tableau
- [.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)
- [.slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice)
- [.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)
- [.join()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join)
- [.includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes)

Nombre aléatoire
- [Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random)

## Exercices: Ajouts et modifications sur cette base

- Lorsque que le jeu est gagné, changer la recette mystère automatiquement
    - Indice: La fonction `créerPizzaMystère` peut être appelée plus d'une fois...
- Au lieu que cela soit fait automatiquement, ajoutez un bouton pour recommencer la partie avec une nouvelle recette mystère et effacez l'historique de la conversation.
- Ajoutez trois boutons pour choisir la difficulté (facile = la recette mystère contient 2 garnitures, moyen: 3 garnitures, difficile: 4 garnitures).
    - Indice: Utilisez une variable pour stocker le niveau de difficulté (le nombre d'ingrédient).
    - Indice: Lorsque la difficulté est définie, la recette mystère doit être générée à nouveau
    - Indice: Dans la fonction `créerPizzaMystère` la difficulté actuelle est écrite en dur. Faut-il la remplacer par une variable ?
- Ajoutez des réponses alternatives pour chaque conditions et affichez en une au hasard à chaque fois.
- Ajoutez plus de garnitures au tableau idoine et modifiez la fonction `afficherLesGarnitures()` afin que 6 garnitures seulement soient sélectionnées au hasard pour la partie en cours.
    - Indice 1: Inspirez-vous de la fonction `créerPizzaMystère()`.
    - Indice 2: Renommer le tableau original `garnitures` afin de pouvoir réutiliser cet identifiant pour stocker les 6 garnitures au hasard dans `afficherLesGarnitures`.
- Avancé: Au début de chaque nouvelle partie, donnez un nom aléatoire au client. Remplacez `Un client entre...` par `Monsieur Hulot entre...` p.ex.
    - Indice 1: utilisez un tableau pour lister les noms que vous créez comme nous l'avons fait avec les garnitures.
    - Indice 2: Pour obtenir un élément aléatoire dans le tableau `noms`: `noms[Math.floor(Math.random() * noms.length)]`.
- Avancé: Transformez le tableau des garnitures en tableau à deux dimensions, chaque élément du premier tableau étant un tableau ayant deux valeurs: La première contient le nom de la garniture, la seconde contient une couleur de votre choix. Appliquez la couleur comme couleur de fond au span correspondant.
