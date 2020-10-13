# Série d'exercices S4

## Exercice 1

Lire et comprendre:

    let a = Number(prompt("Entrez un nombre"))
    
    if (a < 5) {
      document.write("Inférieur à 5")
    } else {
      document.write("Supérieur à 5")
    }

Utilisez la documentation. Au besoin, recherchez les termes sur :
- [devdocs.io](https://devdocs.io/)
- [MDN web docs](https://developer.mozilla.org/fr/search)


## Exercice 2

1. Sur une page HTML, créez un champ de texte qui invite l'utilisateur à indiquer un texte et un bouton qui servira à confirmer l'entrée.
2. Créez une fonction `montrerRésultat` qui affiche le contenu du champ lorsque l'utilisateur clique sur le bouton.

Documentation :
- [addEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [Conditions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else)

[Solution](solutions/s4-exercice-2.html)


## Exercice 3

Sur base de l'exercice 2, ajouter une condition: Si le contenu du champ est un nombre, ne pas l'afficher, mais en avertir l'utilisateur.

Documentation :
- [Alerts](https://developer.mozilla.org/fr/docs/Web/API/Window/alert)

[Solution](solutions/s4-exercice-3.html)


## Exercice 4

1. Créez la fonction "estPair" qui prend un nombre comme argument et qui renvoie True s'il est pair.
2. Si l'utilisateur entre un nombre, votre script indique le message "Votre nombre est pair" et l'inverse: si le nombre n'est pas pair, il indique "Votre nombre n'est pas pair".
3. Si l'utilisateur n'entre pas un nombre, votre script doit indiquer le message "Veuillez entrer un nombre".

[Solution](solutions/s4-exercice-4.html)


## Exercice 5

Créez la fonction "deplacement" avec deux arguments : direction et distance. La fonction renvoie à l'utilisateur, selon les arguments entrés, "Vous êtes allé(e) au/à `argument 1` pendant `argument 2` km."

Pour rappel : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions

[Solution](solutions/s4-exercice-5.html)


## Exercice 6

Modifiez ce [code](s4-exercice-6-donnee.html) pour qu'il affiche les mots entrés sous forme de liste.

Documentation :
- [DOM](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)

[Solution](solutions/s4-exercice-6.html)


## Exercice 7

Créez, sur une page HTML, une calculatrice qui permet à l'utilisateur, en cliquant sur des boutons, d'effectuer des additions et des soustractions (si vous avez envie, ajoutez aussi des multiplications et des divisions !).

Documentation :
- [eval](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval)
- [La valeur de "this" à l'intérieur du gestionnaire](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener#La_valeur_de_this_%C3%A0_lint%C3%A9rieur_du_gestionnaire)

[Solution](solutions/s4-exercice-7.html)


## Exercice bonus 1

Lecture: lisez le [code suivant](https://codepen.io/DigitalDW/pen/LgLYGG) et complétez les commentaires.

Documentation : 
- [événements](https://www.w3schools.com/js/js_events.asp)
- [.addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [.substring()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/substring)
- [.split()](https://www.w3schools.com/jsref/jsref_split.asp)
- [.join()](https://www.w3schools.com/jsref/jsref_join.asp)
- [conditions](https://www.w3schools.com/jsref/jsref_if.asp)
- [.preventDefault()](https://www.w3schools.com/jsref/event_preventdefault.asp)


## Exercice bonus 2

Complexifions la fonction deplacement de l'exercice 1.

1. Sur une page HTML, créez quatre boutons : Nord, Sud, Ouest, Est. Reécrivez la fonction déplacement pour qu'elle affiche sur la page, selon le bouton choisi, la direction (Vous allez direction nord).
2. Ajoutez un champ permettant d'entrer une distance (utilisez un input de type nombre pour éviter de devoir vérifier si l'utilisateur a entré un chiffre ou non). Changez la fonction pour qu'elle affiche aussi la distance ("Vous allez direction nord pendant 5 kilomètres").
3. Si l'utilisateur oublie d'entrer la distance, signalez-le.
4. Si l'utilisateur va 6 kilomètre au sud, lui indiquer qu'il a trouvé le trésor.

[Solution](https://codepen.io/DigitalDW/pen/GYyWym)

[Original](https://gist.github.com/GregoryThonney/b7ca0990f8bf3482d97d7519187ddf7f)