# S7 – Jeu: Pizza Mystère

Objectif: Découvrir et augmenter ensemble un mini-jeu de pizzeria avec un client indécis.

La base de code est étudiée en cours, elle sert de support aux exercices.

## Résumé

Un jeu dans lequel le joueur incarne un pizzaïolo.
Celui-ci doit deviner la bonne recette de pizza pour un client indécis et peu communicatif.

Le jeu est gagné dès que le client est satisfait.

## Déroulement

1. Un client se présente et demande une pizza
2. Le joueur choisi plusieurs garnitures parmi un choix prédéfini
3. Il propose cette pizza au client qui réagi positivement ou négativement en fonction de la recette proposée.
   Seulement trois types de réponses sont possibles: 1. Trop ou pas assez d'ingrédients 2. Le client n'aime pas un des ingrédients proposés 3. C'est la bonne pizza, le client est content ! (fin de la partie)

## Implémentation en trois phases

1. Initialisation (des variables et références)
2. Mise en place (des éléments, fonctions et événements)
3. Interaction (avec l'utilisateur)

## Documentation

Méthodes de tableau utilisées

- [.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)
- [.slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice)
- [.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)
- [.join()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join)
- [.includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes)

Nombre aléatoire

- [Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random)

## Aide

<details>
    <summary>Comment retourner une valeur aléatoire d'un tableau ?</summary>

Utilisez `Math.random()` :

```javascript
let valeurAuHasard = monTableau[Math.floor(Math.random() * monTableau.length)];
```

Math.random() retourne une valeur à virgule flottante entre 0 et 1 (sans jamais retourner exactement 1).
Il suffit de multiplier cette valeur par la longueur du tableau et d'arrondir le tout à la valeur inférieure.

Conseil: expérimentez dans la console de votre navigateur.

</details>

## Exercices

En guise d'exercices, nous vous proposons de réaliser des ajouts et modifications sur la base de code existante: [pizza-mystere-base.html](données/pizza-mystere-base.html)

Copiez ce fichier dans le dossier `travail-personnel` de la semaine afin de conserver l'original et ne pas risquer de conflits avec GitHub.

Libre à vous de choisir en fonction des exercices si vous partez du fichier original ou continuez sur le même fichier pour augmenter le jeu de manière incrémentale avec toutes les nouvelles fonctionnalités.

Trois catégories d'exercices: _Facile_, _Moyen_, _Avancé_ (*F*x, *M*x, *A*x)

**Conseil**: Utilisez la console de votre naviguateur pour débugguer votre code et voir les éventuelles erreurs !

### F1: Continuer le jeu avec nouvelle recette mystère

Lorsque que le jeu est gagné, changer la recette mystère automatiquement afin de pouvoir continuer de jouer.

<details>
    <summary>Indice 1</summary>

Le test de condition "jeu gagné" existe déjà aux lignes 168-170.

Que pouvez-vous faire ici pour renouveller la recette mystère ?

</details>

<details>
    <summary>Indice 2</summary>

La fonction `créerPizzaMystère` peut être appelée plus d'une fois...

</details>

<details>
    <summary>Solution</summary>

Ajouter un simple appel à la fonction existante `créerPizzaMystère` dans la condition aux lignes 168-170.

```javascript
// Si pas de réponse jusqu'ici, c'est gagné !
if (réponse == undefined) {
  réponse = '😋 Oui, merci !';
  créerPizzaMystère();
}
```

</details>

### F2: Gagner avec plus d'impact

Lorsque le jeu est gagné, en plus d'afficher un texte en regard de la proposition, afficher une alerte du navigateur.

<details>
    <summary>Indice</summary>

Consultez la documentation de [window.alert()](https://developer.mozilla.org/fr/docs/Web/API/Window/alert)

</details>

<details>
    <summary>Solution</summary>

Ajoutez après la ligne 169 un appel à `alert()`

```javascript
// Si pas de réponse jusqu'ici, c'est gagné !
if (réponse == undefined) {
  réponse = '😋 Oui, merci !';
  alert('Félicitations, Vous avez gagné le jeu !');
}
```

</details>

### F3: Un repas léger

Ajoutez une condition de test lors de la proposition. Si la recette proposée ne contient que de la pâte à pizza, le client vous fait une remarque désobligeante.

<details>
    <summary>Indice 1</summary>

Dans la fonction `proposerPizza`, inspirez-vous des conditions existantes et ajoutez-en une nouvelle.

</details>

<details>
    <summary>Indice 2</summary>

Pour cette condition, l'ordre dans lequel les conditions sont testées peut avoir son importance !

</details>

<details>
    <summary>Solution</summary>

Ajoutez, au moins après le premier test de condition (pas assez), une nouvelle condition qui teste si la longueur de la recette proposée est égale à zéro :

```javascript
if (recette.length == 0) {
  réponse = '😕 Je ne vous ai pas demandé un apéritif !';
}
```

</details>

### M1: Bouton commencer nouvelle partie

Ajoutez un bouton pour commencer une nouvelle partie.

Cela comprend:

- Créer un bouton et son comportement.
- Créer une nouvelle recette mystère.
- Effacer l'historique de la conversation.

<details>
    <summary>Solution</summary>

Ajouter un simple bouton (s'assurer que les sélecteur fonctionnent toujours !) et créer la fonction `nouvellePartie` qui remet la `recette` à zéro ainsi que les contenus des paragraphes et qui appelle `créerPizzaMystère()`.

HTML :

```html
<p id="recette">...</p>

<!-- Nouveau bouton -->
<button id="nouvellePartie">Nouvelle partie</button>

<!-- Ajout d'un br. Ajout d'un ID au bouton pour proposer une pizza -->
<br />
<button id="proposerPizza">Proposer la pizza</button>

<p id="reponse"></p>
```

JS :

```javascript
// Récupérer les références aux éléments HTML que nous allons utiliser
const pGarnitures = document.querySelector('#garnitures');
const pRecette = document.querySelector('#recette');
const boutonProposer = document.getElementById('proposerPizza'); // Changer la sélection du bouton de proposition
const boutonNouvellePartie = document.getElementById('nouvellePartie'); // Bouton nouvelle pizza
const pRéponse = document.querySelector('#reponse');

boutonNouvellePartie.addEventListener('click', nouvellePartie); // Evénement sur le bouton nouvelle partie

function nouvellePartie() {
  // Remise à zéro de notre recette
  recette = [];
  pRecette.innerText = '...';
  pRéponse.innerText = '...';

  // Créer la recette de la pizza mystère
  créerPizzaMystère();
}
```

</details>

### M2: Réponses alternatives du client

Pour chaque condition de réponse du client (trop d'ingrédients / pas assez / n'aime pas), ajouter des réponses alternatives et affichez-en une au hasard lorsque le cas se présente.

<details>
    <summary>Indice 1</summary>

Utilisez un tableau pour lister les réponses alternative à chaque cas.

</details>

<details>
    <summary>Indice 2</summary>

Trois cas, trois tableaux

</details>

Comment retourner une valeur aléatoire d'un tableau ?
Consultez l'aide dans la section relative plus haut dans ce fichier.

<details>
    <summary>Solution</summary>

Créer un tableau de réponses dans chaque condition. Tirer une des réponses avec `Math.random()`.

```javascript
function proposerPizza() {
  console.log('Notre proposition:', recette);

  let réponse;

  // Tester si on a assez de garnitures
  // Si pas assez, réponse négative
  if (recette.length < recetteMystère.length) {
    const réponses = [
      "😕 C'est un peu léger...",
      '😬 Dites donc, vos frigos sont vides ?',
      "😂 Hahaha, vous croyez que j'ai un appétit d'oiseau ?",
    ];
    réponse = réponses[Math.floor(Math.random() * réponses.length)];
  }

  // Pour chaque garniture choisie,
  recette.forEach((garniture) => {
    // Tester si elle fait partie de la recette mystère
    if (!recetteMystère.includes(garniture)) {
      // Si non, réponse négative
      const réponses = [
        "😩 Il y a quelque chose que je n'aime pas...",
        '🤮 Y a pas moyen que je mange ça moi...',
        "😑 Faites un effort, votre recette n'est pas bonne...",
      ];
      réponse = réponses[Math.floor(Math.random() * réponses.length)];
    }
  });

  // Si trop, réponse négative
  if (recette.length > recetteMystère.length) {
    const réponses = [
      '😒 Il y a trop de choses...',
      "😆 Mais c'est qu'on me prendrait pour Gargantua ici !",
      '😳 Autant de garnitures ? Vos clients mangent des pizzas aussi surchargées ?',
    ];
    réponse = réponses[Math.floor(Math.random() * réponses.length)];
  }

  // Si pas de réponse jusqu'ici, c'est gagné !
  if (réponse == undefined) {
    const réponses = [
      '😋 Oui, merci !',
      "😁 C'est parfait comme ça, bravo !",
      "😳 On ne m'a jamais servi une pizza aussi merveilleuse... Merci !",
    ];
    réponse = réponses[Math.floor(Math.random() * réponses.length)];
  }

  // Afficher la réponse
  pRéponse.innerText += `${recette.join(', ')} ? ${réponse} \n`;

  // Remise à zéro de notre recette
  recette = [];
  pRecette.innerText = '...';
}
```

</details>

### M3: Choisir la difficulté du jeu

Ajoutez trois boutons pour choisir la difficulté:

- facile: la recette mystère contient 2 garnitures
- moyen: 3 garnitures
- difficile: 4 garnitures

<details>
    <summary>Indice 1</summary>

Utilisez une variable pour stocker le niveau de difficulté (le nombre d'ingrédient).

</details>

<details>
    <summary>Indice 2</summary>

Lorsque la difficulté est définie, la recette mystère doit être générée à nouveau.

</details>

<details>
    <summary>Indice 3</summary>

Dans la fonction `créerPizzaMystère` la difficulté actuelle est écrite en dur.
Faut-il la remplacer par une variable ?

</details>

<details>
    <summary>Solution</summary>

Ajouter les trois boutons nécessaires (s'assurer que les sélecteurs fonctionnent toujours !). Dans la fonction `nouvellePartie`, ajouter `this.id` à l'appel de `créerPizzaMystère`. `this`, puisque nous sommes dans une fonction appelée en callback d'un événement, correspond au bouton cliqué. De ce fait, `this.id` correspondra à l'id du bouton cliqué (soit "facile", soit "moyen", soit "difficile"). Modifier la fonction `créerPizzaMystère` pour qu'elle accepte un paramètre (appelé ici `boutonCliqué`). Gérer le nombres de garnitures gardée avec des conditions.

HTML :

```html
<p id="recette">...</p>

<!-- Nouveaux boutons -->
<button id="facile">Nouvelle partie : facile</button>
<br />
<button id="moyen">Nouvelle partie : moyen</button>
<br />
<button id="difficile">Nouvelle partie : difficile</button>

<!-- Ajout d'un br. Ajout d'un ID au bouton pour proposer une pizza -->
<br />
<button id="proposerPizza">Proposer la pizza</button>

<p id="reponse"></p>
```

JS :

```javascript
// Récupérer les références aux éléments HTML que nous allons utiliser
const pGarnitures = document.querySelector('#garnitures');
const pRecette = document.querySelector('#recette');
const boutonProposer = document.getElementById('proposerPizza'); // Changer la sélection du bouton de proposition
const boutonFacile = document.getElementById('facile'); // Bouton nouvelle pizza facile
const boutonMoyen = document.getElementById('moyen'); // Bouton nouvelle pizza moyen
const boutonDifficile = document.getElementById('difficile'); // Bouton nouvelle pizza difficile
const pRéponse = document.querySelector('#reponse');

boutonFacile.addEventListener('click', nouvellePartie); // Evénement sur le bouton nouvelle partie facile
boutonMoyen.addEventListener('click', nouvellePartie); // Evénement sur le bouton nouvelle partie moyen
boutonDifficile.addEventListener('click', nouvellePartie); // Evénement sur le bouton nouvelle partie difficile

function nouvellePartie() {
  // Remise à zéro de notre recette
  recette = [];
  pRecette.innerText = '...';
  pRéponse.innerText = '...';

  // Créer la recette de la pizza mystère
  créerPizzaMystère(this.id); // Appel de créerPizzaMystère avec l'id du bouton cliqué
}

function créerPizzaMystère(boutonCliqué) {
  // Mélanger les garnitures avec .sort() qui renvoie une copie mélangée
  const garnituresMélangées = garnitures.sort(() => 0.5 - Math.random());

  // Isoler les premières garnitures mélangées
  if (boutonCliqué == 'facile') {
    recetteMystère = garnituresMélangées.slice(0, 2);
  }
  if (boutonCliqué == 'moyen') {
    recetteMystère = garnituresMélangées.slice(0, 3);
  }
  if (boutonCliqué == 'difficile') {
    recetteMystère = garnituresMélangées.slice(0, 4);
  }

  // Tricher: Montrer la pizza mystère dans la console
  console.log('Pizza mystère:', recetteMystère);
}
```

</details>

### A1: Plus de garnitures, moins de choix

Ajoutez plus de garnitures au tableau idoine et modifiez la fonction `afficherLesGarnitures()` afin que 6 garnitures seulement soient sélectionnées au hasard pour la partie en cours.

<details>
    <summary>Indice 1</summary>

Inspirez-vous de la fonction `créerPizzaMystère()`.

</details>

<details>
    <summary>Indice 2</summary>

Renommer le tableau original `garnitures` afin de pouvoir réutiliser cet identifiant pour stocker les 6 garnitures au hasard dans `afficherLesGarnitures`.

</details>

<details>
    <summary>Solution</summary>

On peut presque reprendre le code de la fonction `afficherLesGarnitures()` tel quel !

```javascript
// Tableau (Array) contenant toutes les garnitures
const toutesLesGarnitures = [
  'Jambon',
  'Champignons',
  'Oignons',
  'Poivrons',
  'Chorizo',
  'Olives',
  'Saumon',
  'Poulet',
  'Anchois',
  'Câpres',
  'Ananas',
  'Gorgonzola',
  'Grana Padano',
  'Aubergines',
];

const toutesLesGarnituresMélangées = toutesLesGarnitures.sort(
  () => 0.5 - Math.random()
);

// Isoler les 6 premières garnitures mélangées
// Tableau (Array) contenant les garnitures qui seront utilisées pour la partie
const garnitures = toutesLesGarnituresMélangées.slice(0, 6);
```

</details>

### A2: Nom du client aléatoire

Au début de chaque nouvelle partie, donnez un nom aléatoire au client. Remplacez `Un client entre...` par `Monsieur Hulot entre...` p.ex.

<details>
    <summary>Indice 1</summary>

Utilisez un tableau pour lister les noms que vous créez comme nous l'avons fait avec les garnitures.

</details>

<details>
    <summary>Indice 2</summary>

Peut-être devriez-vous ajouter un `<span>` avec `id` en début de phrase pour faciliter l'injection du nom du client ?

</details>

Comment retourner une valeur aléatoire d'un tableau ?
Consultez l'aide dans la section relative plus haut dans ce fichier.

<details>
    <summary>Solution</summary>

Il y a plusieurs façonsde faire, mais dans ce cas :

Ajouter un span dans le paragraphe qui explique le but du jeu. Créer un tableau de noms et en tirer un de façon aléatoire. Enfin, ajouter ce nom dans le span.

HTML :

```html
<p>
  <span id="nom"></span> entre dans votre pizzeria et vous demande une pizza.<br />
  Mais il/elle ne sait pas ce qu'il/elle souhaite...
</p>
```

JS :

```javascript
//// Initialisation ///////////////////////////////////////////////////
//  1. Initialiser les données (garnitures)
//  2. Initialiser les variables
//  3. Initialiser les références (constantes) aux éléments HTML

// Nom aléatoire
const noms = [
  'Loïc Cattani',
  'Loris Rimaz',
  'Isaac Pante',
  'M. Dupont',
  'M. Dupond',
  'Sherlock Holmes',
  'Queen Elizabeth',
  'Angela Carter',
  'Dame galadriel',
  'Agatha Christie',
];

const nomAleatoire = noms[Math.floor(Math.random() * noms.length)];
document.getElementById('nom').innerHTML = nomAleatoire; // Nul besoin de sauver le sélecteur puisqu'on l'utilise une seule fois...
```

</details>

### A3: Colorer les garnitures

Transformez le tableau des garnitures en tableau à deux dimensions: chaque élément du premier tableau étant lui-même un tableau possédant deux valeurs:

- la première contient le nom de la garniture
- la seconde contient une couleur de votre choix.

Appliquez la couleur comme couleur de fond au `<span>` correspondant.

<details>
    <summary>Indice</summary>
Exemple de tableau à deux dimensions

```javascript
const garnitures = [
  ['Jambon', 'lightcoral'],
  ['Champignons', 'rosybrown'],
  // ...
];
```

</details>

<details>
    <summary>Solution</summary>

Modifier le tableau de garnitures pour qu'il devienne un tableau de tableaux (et non plus un tableau de chaînes de caractères). Modifier la fonction `afficherLesGarnitures()` pour accommoder le nouveau format des données : `garniture` sera désormais un tableau (d'abord `['Jambon', 'pink']`, puis `['Champignons', 'brown']`, etc) et non plus une chaîne de caractères !

```javascript
const garnitures = [
  ['Jambon', 'pink'],
  ['Champignons', 'brown'],
  ['Oignons', 'beige'],
  ['Poivrons', 'green'],
  ['Chorizo', 'crimson'],
  ['Olives', 'olive'],
  ['Saumon', 'salmon'],
];

function afficherLesGarnitures() {
  // Pour chaque garniture,
  garnitures.forEach((garniture) => {
    // créer un span,
    let span = document.createElement('span');

    // le remplir (avec garniture[0] puisque garniture est un tableau et non plus une chaîne de caractère),
    span.innerText = garniture[0];
    // le colorer,
    span.style.backgroundColor = garniture[1];

    // et l'ajouter au <p> correspondant.
    pGarnitures.appendChild(span);

    // Ajouter un événement de clic tant qu'on y est
    span.addEventListener('click', choisirGarniture);
  });
}
```

</details>

### A4: Empêcher de mettre plusieurs fois la même garniture

Le code actuel permet de mettre plusieurs fois la même garniture sur la pizza ! Puisque chaque pizza mystère est composée de garnitures différentes, empêchez l'utilisateur de proposer plusieurs fois la même garniture.

Ceci implique plusieurs étapes :

- Garder une trace des garnitures choisies jusqu'à présent.
- Vérifier que la garniture cliquée soit différente que les garnitures déjà choisies.
- Signaler à l'utilisateur qu'une garniture est déjà choisie s'il s'apprête à mettre une garniture déjà sur la pizza.
- S'assurer de vider la liste des garnitures choisies lorsque l'utilisateur valide la pizza.

<details>
    <summary>Indice 1</summary>

Il va falloir trouver un moyen de garder une trace des garnitures cliquées par l'utilisateur. Avec un tableau par exemple ?

```javascript
// tableau contenant les garnitures que le pizzaiolo a mis sur la pizza.
const garnituresChoisies = [];
```

</details>

<details>
    <summary>Indice 2</summary>

Une fois que l'on garde une trace des garnitures cliquées par l'utilisateur, vérifier, lors d'un clic sur une garniture, que la garniture cliquée n'est pas dans la liste de celles déjà cliquées.

Modifiez la fonction `choisirGarniture()`. Essayez avec `.includes()`.

</details>

<details>
    <summary>Indice 3</summary>

Attention ! Il faudra vider la liste des garnitures cliquées à chaque fois que l'utilisateur valide la pizza, **qu'elle soit correcte ou non**.

</details>

<details>
    <summary>Solution</summary>

Bien qu'il soit possible de créer une nouvelle variable indépendante qui stocke les garnitures sélectionnées, un peu de jugeoutte et de reflexion nous montre que `recette` remplit déjà très bien ces conditions ! Ainsi, il s'agit simplement d'ajouter une petite condition...

```javascript
function choisirGarniture() {
  // Récupérer le nom de la garniture
  const garniture = this.innerText;

  if (recette.includes(garniture)) {
    alert(
      `Impossible d'ajouter le/la/les ${garniture} ! Il y en a déjà sur la pizza !`
    );
  } else {
    // Observer dans la console
    console.log('Ajouté:', garniture);

    // Ajouter cette garniture à notre recette
    recette.push(garniture);

    // Ajouter la garniture au paragraphe de la recette
    pRecette.innerText = recette.join(', ');
  }
}
```

</details>

### Exercice bonus: Boule magique

Maintenant que vous êtes familier avec la manipulation de tableaux et le tirage de nombres au hasard, peut-être voulez-vous essayer de créer un autre jeu de toute pièce: Un boule magique !

En vous inspirant du jeu Pizza Mystère, reproduisez ceci:

<img src="données/boule-magique.png" width="180">

Lorsque l'on clique sur le bouton "Demander une réponse", un texte aléatoire apparaît en dessous (ici: "C'est bien parti").

Solution: [boule-magique.html](solutions/boule-magique.html)
