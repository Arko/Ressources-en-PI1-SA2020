# Exercice et live coding: Démineur

## Etape 1: base HTML

1. Créez un dossier `démineur` ou utilisez le dossier `travail-personnel`
2. Ouvrez ce dossier avec VS Code
3. Créez un fichier `démineur.html`
4. Créez la structure HTML de base avec:
    - titre "Démineur"
    - bouton "Nouveau jeu"
    - séparateur horizontal
    - une div avec id "grille"
    - un paragraphe
    - élément script vide


## Etape 2: créer la grille

- A l'aide de deux boucles imbriquées, créez une grille de 10x10 divs.
- Utilisez deux constantes pour stocker la largeur et hauteur de la grille.
- Coder le CSS afin d'afficher les divs sous forme de carrés avec bordures.
- Conseil: Créez une fonction `creerCase` pour modulariser le code hors de la boucle.

Astuce: pour vous aider, créez manuellement quelques divs et retours à la ligne `<br>`. De cette manière vous pourrez résoudre les styles CSS avant de faire le JS.


## Etape 3: clic sur une case

- Ajoutez un événement de clic à chaque case.
- En réponse à ce clic, la fonction `découvrir` est exécutée.
- Cette fonction ajoute à la case la classe `vue` qui la colore en gris.


## Etape 4, live coding: clic droit sur une case
(suivre en direct et recopier ensuite)

- Ajoutez un événement de clic-droit (`contextmenu`) à chaque case.
- En réponse à ce clic-droit, la case se voit ajouter la classe `vue` qui la colore en orange.
- Attention: lors de l'utilisation d'un événement clic-droit, il faut utiliser `event.preventDefault` afin d'éviter la propagation de l'événement et l'ouverture du menu contextuel.


## Etape 5: création des mines

Chaque case a 10% de chance d'être une mine.

- Ajoutez la propriété `estMine` à chaque case lors de sa création.
- Cette propriété contient une valeur *booléenne* qui est le résultat d'un tirage aléatoire.
- Créez une nouvelle constante `difficulté` contenant la valeur permettant à ce tirage de retourner `true` 10% du temps.


## Etape 6: activation des mines

Lors d'un clic sur une case, si cette case est une mine:
- ajoutez une classe `mine` qui colore la case en rouge.
- ajoutez un `M` dans la case.
Sinon:
- conservez l'ajout de la classe `vue`.


## Etape 7: bouton nouveau jeu

Un clic sur le bouton `Nouveau jeu` permet de recommencer le jeu. Cela implique:
- supprimer le contenu du div `grille`.
- remplir une nouvelle fois la grille avec de nouvelles cases.

- Créez une fonction `remplirGrille` contenant le code existant des boucles imbriquées.
- Créez une fonction `nouveauJeu` qui implémente les deux points cités en en-tête.
- Appeler cette fonction lors:
    - d'un clic sur le bouton (créez référence et événement)
    - ainsi qu'une fois automatiquement en fin de script afin que le jeu démarre automatiquement au chargement de la page.


## Etape 8: explorer une case

Actuellement, cliquer sur une case n'étant pas une mine ajoute simplement la classe `vue`. Mais la notion d'exploration d'une case dans le jeu Démineur est plus complexe que ceci. Nous allons avoir besoin d'une fonction dédiée pour la suite du développement.

- Créez une fonction `explorerCase`.
- Copiez la ligne de code permettant d'ajouter la classe `vue` dans cette fonction, et
- Remplacez cette ligne de code par un appel à la fonction.

Indice: ||Utilisez un argument/paramètre pour transférer la référence de la case cliquée.||


## Etape 9: compter les mines alentours

But: lors d'un clic sur une case pour la découvrir, la case doit indiquer le nombre de mines présentes sur les huit cases autours d'elle.

### Phase analytique 

Analyse: Comment explorer les cases alentours et compter les mines présentes ?
- Il faut connaitre la position de la case courante
- De là, nous pouvons calculer la position des cases environnantes et obtenir une référence à chacune d'entre elles
- Pour chacune de ces cases, tester s'il s'agit d'une mine
- Si oui, incrémenter le compte
- Afficher le compte dans la case cliquée

### Phase de réflexion sur l'implémentation

- Comme toujours, il y a plusieurs solutions:
    - utiliser un tableau à deux dimensions: permet de référencer facilement les autres cases avec des index différentiels. Problème: comment créer ce tableau ?
    - les cases pourraient être organisées en réseau, chaque case ayant des références à ses voisines. Problème: comment créer ce réseau ?
    - chaque case peut contenir le nombre recherché sous forme de propriété, il suffirait de le révéler. Mais dans ce cas, ce calcul doit se faire au lancement de la partie. Ce qui ne résout pas le problème.

Qu'avons-nous à disposition ?
- Un `<div id="grille">` contenant des éléments `divs` et `br` (pas de tableau, ni réseau).
- Un événement de clic lors de la découverte d'une case, mais nul moyen de connaitre la position de la case dans la grille.

Que pouvons-nous faire avec ceci ?
- Collectionner des références à chaque case avec `document.querySelectorAll('#grille div')`. La collection retournée est un objet de type `NodeList`. Cet objet implémente la méthode `forEach()`, mais pas les autres méthodes habituellement disponibles avec un vrai tableau JS (`Array`).
- Il faut donc convertir ce tableau en tableau JS avec `Array.from()`.

De plus, afin de savoir quelle case a été cliquée
- Assigner un index à chacune lors de sa création

De cette manière nous aurons une liste de cases sous forme de tableau, chacune ayant un index propre.


## Etape 9a, live coding: créer un tableau de cases
(suivre en direct et recopier ensuite)

Créons une nouvelle variable `cases` contenant un tableau référençant toutes les cases.

Penser à vider ce tableau à chaque début de partie !


## Etape 9b, live coding: assigner un index à chaque case
(suivre en direct et recopier ensuite)

Lors de la création de chaque case, assignons la propriété `index` (choix du nom libre) faisant état de la position de la case dans la grille.

Passer les variables `ligne` et `colonne` en argument lors de l'appel de la fonction `créerCase`.


## Etape 9c, live coding: trouver les cases voisines
(suivre et recopier ensuite avec le code mis à disposition via Discord)

Créons une fonction `trouverCasesVoisines`, celle-ci contiendra le code permettant de sélectionner et retourner uniquement les cases voisines.

Quelle méthode employer pour réaliser cette opération ? Encore une fois, plusieurs solutions sont possibles.

L'une d'entre elles est l'utilisation de la méthode `Array.filter()`.
- Celle-ci reçoit une fonction en argument.
- Cette fonction est appelée pour chaque élément du tableau original.
- A chaque itération, l'élément est disponible sous forme de paramètre
- En fonction de la valeur retournée, sous forme booléenne, l'élément est inclus, ou pas, dans un nouveau tableau retourné par la méthode `filter`.

Pour utiliser la méthode filter, nous devons comparer deux valeurs. Ces valeurs seront bien entendu les index que nous avons assignés plus tôt.

L'appel de la fonction `trouverCasesVoisines` retournera donc les cases voisines qui seront stockées dans une variable locale.


## Etape 9d, live coding: compter les mines parmi les cases voisines
(suivre en direct et recopier ensuite)

Maintenant que nous avons à disposition les cases voisines, nous pouvons enfin calculer le nombre de mines.

Pour cela, une solution élégante est d'utiliser la méthode `Array.reduce()`.
- Celle-ci reçoit une fonction en argument, ainsi qu'une valeur de départ.
- Cette fonction est appelée pour chaque élément du tableau original.
- A chaque itération, deux paramètres sont passés: un accumulateur, et l'élément actuel.
- La valeur retournée par la fonction est assignée à l'accumulateur.
- Une fois tous les éléments itérés, la valeur de l'accumulateur est retournée.

Cette valeur retournée est alors insérée dans la case explorée.


## Etape 10, live coding: explorer automatiquement si zéro mines
(suivre en direct et recopier ensuite)

Une des spécificités du jeu démineur est l'exploration automatique des cases alentours lorsque la case explorée indique zéro mines.

Il s'agit en réalité d'une facilité offerte au joueur qui aurait sinon à cliquer sur une grande quantité de cases dont l'absence de mine serait évidente.

Dans la fonction `explorerCase`, si le compte est égal à zéro, nous allons explorer les cases voisines.

Attention: Explorer la case **uniquement** si elle n'a pas déjà été explorée ! Au risque de créer une boucle infinie et de geler la page.

Car ce que nous nous apprêtons à faire est d'utiliser la fonction `explorerCase` de manière récursive. La fonction va s'appeler elle-même si les conditions que nous définissons sont réunies.


## Etape 11: Afficher le nombre de mines en jeu

- Créez une nouvelle variable `minesTotal`
- Obtenez une référence au paragraphe présent sous la grille

Au début de chaque partie:
- Assignez le compte total de mines présentes sur le terrain de jeu à la variable `minesTotal`.
- Insérez la valeur de cette variable dans le paragraphe. Avec un texte descriptif.

Indice 1: ||Nous avons déjà codé quelque chose de très similaire.||
Indice 2: ||Inspirez-vous du compte de mines dans les cases voisines dans la fonction d'exploration de la case.||


## Etape 12: Compter les mines correctement signalées

Avant d'arriver à l'ultime partie du jeu qui est d'annoncer la victoire du joueur, nous devons connaître le nombre de mines que celui-ci à correctement identifié.

- Créez une nouvelle variable `minesIdentifiées`

Lors de la pose d'un drapeau dans la fonction `signaler`:
- Testez si la case contient effectivement une mine:
    - Si oui, testez si la case contient la classe `drapeau`:
        - Si oui, incrémentez la variable
        - Si non, décrémentez la variable

Pensez à remettre à zéro cette variable à chaque début de partie.

Indice: Comment tester si la case contient la classe `drapeau` ? ||Nous avons codé quelque chose de très similaire lors de l'exploration récursive des cases.||


## Etape 13: Victoire !

- Créez une fonction `vérifierJeu`
- Appelez cette fonction depuis la fonction `signaler`
- Dans cette nouvelle fonction, comparez les variables relatives au total de mines et au nombre de mines correctement identifiées. Si le compte est identique, le jeu est gagné.
- Lorsque cette condition est remplie, insérez un texte de victoire dans le paragraphe existant.


## Etape 14: Un victoire plus évidente

- Lorsque la condition de victoire est remplie, itérez à travers toutes les cases.
- Si la case est une mine:
    - Ajoutez une classe `drapeau-vert`, colorant la case en vert
    - Ajoutez un `M` dans la case

Indice: ||utiliser une boucle `forEach`||
