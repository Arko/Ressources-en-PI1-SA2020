# Série 6 - tableaux, boucles et conditions

## Exercice 1

1. Créez deux tableaux ([Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array)) vides : `pairs` et `impairs`.
2. Créez une boucle qui va de 1 à 100.
3. À chaque tour de la boucle, ajouter le chiffre au tableau qui lui correspond : les chiffres pairs dans le tableau `pairs`, les impairs dans `impairs`. Indices : [.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push).

[Solution](solutions/exercice1.html)

## Exercice 2

Sur la base du tableau `impairs` obtenu dans l'exercice 1...

1. Créez un nouveau tableau : `parTrois`.
2. À l'aide d'une boucle ([for](https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript)), itérez sur le tableau `impairs` et remplissez le tableau `parTrois` avec les chiffres divisibles par 3. Indices : [modulo (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques)

[Solution](solutions/exercice2.html)

## Exercice 3

1. Créez une boucle qui va de 1 à 100.
2. Créez un `<div>` par nombre.
3. Attribuez une couleur de fond à chaque `<div>` (`div.style.backgroundColor = ...`) :
   - Si le nombre est pair, mettez la couleur de fond en vert.
   - Si le nombre est impair, mettez la couleur de fond en bleu.
   - Si le nombre est divisible par 3, mettez la couleur de fond en turquoise (entre bleu et vert).
   - (Bonus) Si le nombre est premier, mettez le du texte et de la bordure en rouge.

[Solution](solutions/exercice3.html)

## Exercice 4

1. Créez une grille de divs de 20x20 avec deux boucles.
2. Écrivez, dans chaque div, le résultat de la multiplication des valeurs des deux boucles :

```
1, 2, 3, ...
2, 4, 6, ...
3, 6, 9, ...
., ., .,
., ., .,
., ., .,
```

3. Donnez une couleur de fond aux divs en fonction de leur valeur.

[Solution](solutions/exercice4.html)

## Exercice 5

1. Créez un tableau avec des valeurs allant de 1 à 100.
2. Créez un nouveau tableau qui contient toutes les valeurs du premier tableau multipliée par 10 (utilisez [.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) ou une boucle).

[Solution](solutions/exercice5.html)

## Exercice 6

1. Créez une fonction qui retroune un nombre aléeatoire entre 1 et 100.
2. Remplissez un tableau avec 100 nombres tirés aléatoirement.
3. Additionnez toutes les valeurs du tableau (avec une boucle ou [.reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce]) et affichez le résultat dans la page (dans un `<div>`, un `<span>` ou un `<p>`, comme vous préférez).
4. (Bonus) Tirez plusieurs listes de 100 nombres aléatoires. Calculez leurs totaux. Calculez la moyenne des totaux. Affichez le tout sur la page.

[Solution](solutions/exercice6.html)

## Exercice 7

1. Créez une fonction qui retourne un nombre aléatoire : soit 1, soit 0.
2. Créez deux tableaux (`tirage1` et `tirage0`).
3. À l'aide d'une boucle, tirer 1000 nombres aléatoires avec la fonction créer au point 1. Stocker les tirages qui valent 1 dans le tableau `tirage1` et les tirages qui valent 0 dans le tableau `tirage0`.
4. Calculez la proportion de 1 et de 0 à l'aide des deux tableaux maintenant remplis. Le calcul est assez simple : on veut diviser la longueur du tableau `tirage1` avec la longueur cumulée des deux tableaux (`tirage1` et `tirage0`). De même avec `tirage0`.
5. Écrivez les proportions sur la page.

[Solution](solutions/exercice7.html)

## Exercice 8

Même exercice que le 7, mais à réaliser avec un tableau à deux dimensions. Dans l'idée, on aurait quelque chose comme ça : `[tirage1, tirage0]`.

[Solution](solutions/exercice8.html)
