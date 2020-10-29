# Série pour révisions

## A - les variables

### Exercice A1

1. Déclarez une variable `chiffre` qui contient le chiffre `10`.
2. Déclarez une variable `texte` qui contient la chaîne de caractère `"Hello world!"`.
3. Déclarez une variable `booleenne` qui contient la valeur bouléenne `true`.
4. Déclarez un tableau `notes` qui contient les valeurs suivantes : `5, 5.5, 5, 4, 6, 4.5`.
5. Déclarez un tableau `couleurs` qui contient les chaînes de caractères suivantes : `"red", "blue", "green"`.
6. Déclarez un tableau `tableaux` qui contient trois tableaux vides.
7. Déclarez un objet `voiture` qui contient les informations suivantes sur une voiture :
   1. Marque : Mazda
   2. Modèle : RX-7
   3. couleur : Rouge
   4. Puissance : 105 ch
   5. Kilomètres : 25000
   6. Prix : 11500
8. Déclarez un tableau `garage` qui contient trois objets similaires à `voiture` : vous pouvez utiliser les véhicules de votre choix ou mettre plusieurs fois le même véhicule.

[Solution](./solutions/A1.html)

### Exercice A2

1. Modifiez la variable `chiffre` lui additionnant 1. Puis, multipliez `chiffre` par 2. Additionnez 4. Divisez par 2. Soustraire 10. Normalement, `chiffre` devrait maintenant être égal à `3` !
2. Ajoutez `" Hope you're doing well."` à la variable `texte`.
3. Modifiez la valeur de `booleenne` en la rendant égale à `chiffre == 10`.
4. Ajoutez la valeur `5.5` à `notes` (rappel : [.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)).
5. Supprimez la dernière valeur de `couleurs` (rappel : [.pop()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop)).
6. Ajoutez les valeurs `1, 2, 3` au premier tableau dans `tableaux`. Ajoutez les valeurs `4, 5, 6` au deuxième tableau dans `tableaux`. Ajoutez les valeurs `7, 8, 9` dans le dernier tableau dans `tableaux`. Rappel : utilisez la notation `tableaux[0]` pour accéder au premier élément, `tableaux[1]` pour le deuxième, etc. Rappel : utiliser `.push()` pour ajouter des éléments à un tableau.
7. Sur la base de `voiture`, affichez la phrase suivante dans la console : `"Je veux acheter une Mazda RX-7 ! Et pour 11500CHF, ça me semble assez honnête !"`. Rappel, pour accéder à la valeur d'une propriété d'un objet : `voiture.couleur`.
8. Sur la base de `garage`, calculez la moyenne du prix des voitures. Indice : il va falloir additionner les prix des 3 voitures et diviser le total par 3. Rappel, pour accéder à la valeur d'un tableau : `garage[0]`. Rappel, pour accéder à la valeur d'une propriété d'un objet : `voiture.moteur`. Indice, il faudra combiner les deux rappels pour réussir !

[Solution](./solutions/A2.html)

## B - les fonctions

Rappel : [MDN - les fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)

### Exercice B1

Créez une fonction `helloWorld` qui, quand elle est appelée, affiche "Hello world" dans la console.

### Exercice B2

Créez une fonction `direBonjour` avec un argument (`nom`) qui, quand elle est appelée (`direBonjour("Loris")`), affiche "Bonjour Loris" dans la console.

### Exercice B3

Créez une fonction `somme` avec deux argument (`a` et `b`) qui, quand elle est appelée (`somme(2, 3)`), affiche le résultat de la somme des deux chiffres dans la console.

### Exercice B4

1. Créez une fonction `soustraction` avec deux argument (`a` et `b`) qui, quand elle est appelée (`soustraction(2, 3)`), _retourne_ le résultat de la soustraction du deuxième chiffre au premier.
2. Déclarez une variable `resultat` égale au résultat de la soustraction de `10` et `5`.

### Exercice B5

1. Déclarez une variable `chiffre` égale à `6`.
2. Créez une fonction `tourDeMagie` avec un argument (`n`) qui réalise tous les calculs proposés à l'exercice A2.1.
3. Faites en sorte que `tourDeMagie` _retourne_ le résultat des calculs.
4. Déclarez une nouvelle variable `resultat` égale au résultat de la fonction `tourDeMagie` appelée avec `chiffre` (`tourDeMagie(chiffre)`).
5. Affichez `resultat` dans la console.

## C - le DOM

### Exercice C1

Créez un ficher HTML qui contient les éléments suivants :

- Un titre (`<h1>`) qui contient "Exercices DOM".
- Un paragraphe vide.
- Un input de type nombre (donnez lui un id, "nombre" par exemple).
- Un bouton qui dise "cliquez".
- un retour à la ligne.

[Solution](./solutions/C1.html)

### Exercice C2

Sélectionnez le titre et changez le en "J'ai hacké le titre !" (rappel : `.innerHTML`).

[Solution](./solutions/C2.html)

### Exercice C3

Sélectionnez le paragraphe et écrivez "Entrez un nombre dans l'input et cliquez pour une surprise..." dans son HTML (rappel : `.innerHTML`).

[Solution](./solutions/C3.html)

### Exercice C4

1. Sélectionnez l'input (avec son id).
2. Sélectionnez le bouton.
3. Ajoutez un événement "click" au bouton qui prend une fonction `dessinerDiv` (qu'on va déclarer au point suivant) en _callback_.
4. Déclarez la fonction `dessinerDiv` vide.

[Solution](./solutions/C4.html)

### Exercice C5

Complétez la fonction `dessinerDiv` :

1. Déclarez une variable `valeurInput` égale à la valeur de l'input sélectionné.
2. Déclarez une variable `div` qui contient un nouveau `div` (rappel : `document.createElement()`).
3. Ajoutez du style à votre div (par exemple `div.style.color`) pour que le div...
   - ... ait une largeur de 25px
   - ... ait une hauteur de 25px
   - ... ait un bordure noire, d'un pixel d'épaisseur, et solide
   - ... aligne le texte contenu au centre
   - ... ait une couleur de fond (de votre choix, la solution propose du HSL mais vous être libre de mettre ce que vous voulez)
4. Ajoutez `valeurInput` dans le HTML du div (rappel : `.innerHTML`).
5. Ajoutez `div` à la page (rappel : `document.body.appendChild()`).

[Solution](./solutions/C5.html)

## D - opérations logiques et conditions

### Exercice D1

1. Déclarez une variable `chiffre` égale à `5`.
2. Affichez dans la console les résultats des tests logiques suivants (tentez de prédire les résultats avant de les afficher dans la console !) :
   - `chiffre == 5`.
   - `chiffre != 5`.
   - `chiffre >= 10`.
   - `chiffre <= 10`.
   - `chiffre < 10 && chiffre > 0`.

[Solution](./solutions/D1.html)

### Exercice D2

Créez la fonction `divisiblePar3` avec un argument (`n`) qui, quand elle est appelée, _retourne_ `true` ou `false` en fonction de si le chiffre utilisé est divisible par 3 ou non. Par exemple : `divisiblePar3(54)` sera `true`, mais `divisiblePar3(43)` sera faux.

[Solution](./solutions/D2.html)

### Exercice D3

1. Déclarez la variable `chiffre` qui contient un chiffre aléatoire entre 1 et 100 (`Math.ceil(Math.random() * 100)`).
2. Déclarez la variable `resultat` qui contient une chaîne de caractères vide.
3. Si `chiffre` est supérieur à `50`, modifiez `resultat` pour qu'elle contienne la chaîne "Le chiffre est supérieur à 50".
4. Si `chiffre` est inférieur à `50`, modifiez `resultat` pour qu'elle contienne la chaîne "Le chiffre est inférieur à 50".
5. Affichez `resultat` dans la console.

[Solution](./solutions/D3.html)

### Exercice D4

Même exercice que le D4, mais un peu plus compliqué...

1. Déclarez la variable `chiffre` qui contient un chiffre aléatoire entre 1 et 100 (`Math.ceil(Math.random() * 100)`).
2. Déclarez la variable `resultat` qui contient une chaîne de caractères vide.
3. Si `chiffre` est compris entre `1` et `25`, modifiez `resultat` pour qu'elle contienne la chaîne "Le chiffre est dans le premier quart (1 à 25)".
4. Si `chiffre` est compris entre `26` et `50`, modifiez `resultat` pour qu'elle contienne la chaîne "Le chiffre est dans le deuxième quart (26 à 50)".
5. Si `chiffre` est compris entre `51` et `75`, modifiez `resultat` pour qu'elle contienne la chaîne "Le chiffre est dans le troisième quart (51 à 75)".
6. Si `chiffre` est compris entre `76` et `100`, modifiez `resultat` pour qu'elle contienne la chaîne "Le chiffre est dans le quatrième quart (76 à 100)".
7. Affichez `resultat` dans la console.

[Solution](./solutions/D4.html)

### Exercice D5

1. Créez une page HTML contenant un input de type nombre et un bouton.
2. Sélectionnez l'input et le bouton.
3. Ajoutez un événement "click" au bouton qui prend une fonction `dessinerDiv` (qu'on va déclarer au point suivant) en _callback_.
4. Déclarez la fonction `dessinerDiv` et mettez-y les instructions suivantes :
   1. Déclarez une variable `valeurInput` égale à la valeur de l'input sélectionné.
   2. Déclarez une variable `div` qui contient un nouveau `div` (rappel : `document.createElement()`).
   3. Ajoutez du style à votre div (par exemple `div.style.color`) pour que le div...
      - ... ait une largeur de 25px si le `valeurInput` est inférieur à 100, 40px si `valeurInput` est supérieur ou égal à 100.
      - ... ait une hauteur de 25px si le `valeurInput` est inférieur à 100, 40px si `valeurInput` est supérieur ou égal à 100.
      - ... ait un bordure noire, d'un pixel d'épaisseur, et solide
      - ... aligne le texte contenu au centre
      - ... ait une couleur de fond (de votre choix, la solution propose du HSL mais vous être libre de mettre ce que vous voulez)
   4. Ajoutez `valeurInput` dans le HTML du div (rappel : `.innerHTML`).
   5. Ajoutez `div` à la page (rappel : `document.body.appendChild()`).

[Solution](./solutions/D5.html)

## E - Boucles et tableaux

### Exercice E1

1. Créez une boucle qui va de 1 à 100.
2. Affichez les chiffres de la boucle dans la console.

### Exercice E2

1. Créez un tableau `notes` avec les valeurs `5, 5.5, 5, 4, 6, 4.5`.
2. A l'aide d'une boucle, itérez sur le tableau pour afficher ses valeurs dans la console. Pour rappel, on voudras faire aller la boucle de 0 jusqu'au numéro du dernier index du tableau (dans ce cas, on a 6 éléments donc le dernier index vaut 5 - `index 0 : 5`, `index 1 : 5.5`, `index 2 : 5`, `index 3 : 4`, `index 4 : 6`, `index 5 : 4.5`) ; on peut obtenir la longeur (le nombre d'éléments) du tableau avec [.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/length).

### Exercice E3

1. Créez un tableau `chiffres` vide.
2. A l'aide d'une boucle qui va de 1 à 50, remplir `chiffres` avec les chiffres de la boucle (rappel : [.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)).
3. Affichez `chiffres` dans la console

### Exercice E4

1. Créez un tableau `chiffres` vide.
2. A l'aide d'une boucle qui va de 1 à 50, remplir `chiffres` avec des chiffres aléatoires entre 1 et 10 (`Math.ceil(Math.random() * 10)`).
3. Vérifiez que la longueur du tableau vaut bien 50 (avec un `console.log()`).
4. Créez un tableau `fois5` vide.
5. A l'aide d'une boucle, itérez sur le tableau `chiffres`, multipliez chaque valeur par 5 et placez la dans le tableau `fois5`.
6. Créez une variable `total` égale à `0`.
7. A l'aide d'une boucle, itérez sur le tableau `fois5` et additionnez chaque valeur à total.
8. Affichez `total` dans la console.

### Exercice E5

1. Créez une boucle qui va de 1 à 10.
2. Créez une deuxième boucle (dans la première) qui va de 1 à 20.
3. Dans cette deuxième boucle :
   - Déclarez une variable `div` qui contient un nouvel élément `div` (`document.createElement()`).
   - Déclarez une variable `nombreAleatoire` qui contient un nombre aléatoire entre 0 et 20 (`Math.floor(Math.random() * 21)`).
   - Ajoutez du style à votre div (par exemple `div.style.color`) pour que le div...
     - ... ait une largeur de 25px
     - ... ait une hauteur de 25px
     - ... ait un bordure noire, d'un pixel d'épaisseur, et solide
     - ... aligne le texte contenu au centre
     - ... soit affiché en `inline-block`
     - ... ait une couleur de fond en fonction du nombre aléatoire (utiliser le [hsl](https://www.w3schools.com/css/css_colors_hsl.asp) comme on l'a vu dans l'exercice S5.6)
   - Ajoutez un nombre aléatoire dans le HTML du `div` (`.innerHTML`).
   - Ajoutez `div` à la page (rappel : `document.body.appendChild()`).
4. Dans la première boucle (après la deuxième boucle) créez un élément `br` et ajoutez-le à la page.

## F - Exercices avancés

### Exercice F1

Sur la base du code obtenu à la fin de l'exercice E5, ajoutez une interaction sur les divs :

1. Quand l'utilisateur survole un div, soustraire `1` à la valeur de son `innerHTML`, modifier son `innerHTML` et sa couleur en fonction de la nouvelle valeur obtenue.
2. S'assurer de ne pas pouvoir diminuer la valeur du `innderHTML` d'un div si elle est égale à 0.
3. (BONUS) Si toutes les divs de la grilles valent 0, faire une `alert()` à l'utilisateur.
4. (BONUS) Si toutes les divs de la grilles valent 0, suppriemr l'eventListener ([.removeEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/removeEventListener)) de tous les divs.
