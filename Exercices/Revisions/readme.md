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

## B - le DOM
