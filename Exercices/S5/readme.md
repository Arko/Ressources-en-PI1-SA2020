# Série 5

→ Si vous n'utilisez pas GitHub Desktop, téléchargez cette série d'exercice [ici](https://cw.unil.ch/pi1/S5.zip).

## Exercice 1

Créez un code qui permette d'obtenir [ce résultat](https://zupimages.net/up/18/46/c10j.png).

Conseils :

- Créez un span par chiffre
- L'attribut CSS qui permet de modifier la taille d'un texte est [font-size](https://developer.mozilla.org/fr/docs/Web/CSS/font-size)

[Solution](solutions/exercice_1.html)

## Exercice 2

Créez un [examen de la vue](https://zupimages.net/up/18/46/9b7p.png).

Proposition pour réaliser l'exercice:

1. Créez une variable de texte et écrivez ce que vous voulez (uniquement des lettres et des espaces)
2. Séparez ce texte pour obtenir un tableau de mots (conseil : [.split()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split)).
3. À l'aide d'une boucle, itérez sur le tableau. À chaque itération, créez (et ajoutez) un élément pour chaque cellule du tableau
   - Attention ! Il faut qu'il y ait un retour à la ligne entre chaque élément
   - Attention ! Il faut réduire la taille du texte plus on ajoute des éléments

[Solution](solutions/exercice_2.html)

## Exercice 3

3.1) Créez un input de type nombre et un bouton

3.2) Lorsque l'utilisateur appuie sur le bouton, si une valeur est entrée dans l'input, créez une grille de divs carrée qui a autant de lignes et de colonnes que la valeur entrée dans l'input.

3.3) Donnez un style approprié aux divs pour qu'elles apparaissent comme des divs.

[Solution](solutions/exercice_3.html)

## Exercice 4

4.1) Générez une grille de 5x5 divs.

4.2) Attribuez une couleur par ligne.

4.3) Même exercice, mais attribuez une couleur par colonne.

[Solution](solutions/exercice_4.html)

## Exercice 5

5.1) Créez une grille de divs de 40x20 (40 de long, 20 de haut).

5.2) Donnez un style aux divs (largeur, hauteur, couleur de fond, display, etc...).

5.3) Ajoutez une interaction : chaque fois que l'on clique sur une div, on change sa couleur (de votre choix).

[Solution](solutions/exercice_5.html)

## Exercice 6

Créez un programme pour réaliser un dégradé de couleurs (comme [ceci](https://zupimages.net/up/18/48/q3ks.png)).

Conseils :

- Créez une div vide par couleur
- Essayer d'attribuer les couleurs automatiquement avec le mode de couleur [hsl](https://www.w3schools.com/css/css_colors_hsl.asp)

[Solution](solutions/exercice_6.html)

## Exercice 7

Sur la base de l'exercice 3 (générer une grille carrée en fonction de la valeur entrée)...

7.1) ...changez la couleur de fond des divs lorsqu'on les survole.

7.2) Attribuez une couleur aléatoire lors du survol (pour l'aléatoire : [Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random).

[Solution](solutions/exercice_7.html)
