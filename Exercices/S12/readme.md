# Vanilla Todos

Objectif: coder une liste de tâches pérenne en "Vanilla" Javascript, par opposition à de nombreux didacticiels utilisant toutes sortes de frameworks.

## Etape 1 - base

- Construire base HTML
    - titre
    - champ de texte
    - bouton
    - liste à point (vide)

- Ajouter un élément script, mais cette fois-ci avec l'attribut `src` pointant vers un fichier javascript 'main.js' que vous créez au même niveau que votre `index.html`.

Syntaxe script:src:  ||`<script src="main.js"></script>`||


## Etape 2 - Liste minimaliste

Dans le fichier `main.js`, écrire le code nécessaire afin que lors d'un clic sur le bouton, le texte entré dans le champ de texte soit ajouté à la liste à point.

Nommage des fonctions:
- Fonction callback de l'événement de clic: `créerTodo`
- Fonction responsable de l'ajout de l'élément `<li>`: `ajouterLigne`

Finitions:
- Ajoutez une condition empéchant cet ajout si le champ de texte est vide.
- Videz le champ une fois l'ajout effectué.


## Etape 3 - Case à cocher

Dans la fonction `ajouterLigne`, avant d'insérer le texte, ajoutez une case à cocher.

Indices:
- Syntaxe d'une case à cocher: ||`<input type="checkbox">`||
- Pour définir l'attribut `type`, ||utilisez `element.setAttribute`||
- Ajoutez le texte ensuite avec || `ligne.innerHTML += champ.value`||


## Etape 4 - Action "effacer"

Toujours dans la fonction ajouter ligne, cette fois après l'insertion du texte, ajoutez un élément `span` contenant une croix `&times;`.


## Etape 5 - Supprimer une ligne

Lors d'un clic sur la croix, supprimer la ligne en question

Indices:
- Un querySelector peut être fait sur un élément existant !
- Syntaxe pour retirer un élément: ||element.parentNode.remove()||


## Etape 6 - Modèle objet d'une tâche

Créez une nouvelle constante `todos`: un tableau vide.

Dans la fonction callback `créerTodo`, créez un objet `todo` contenant deux propriétés:
1. `etat`, valeur: `false`
2. `texte`, valeur: texte du champ

"poussez" cet objet nouvellement créé dans le tableau `todos`.

Puis passez cet objet à la fonction `ajouterLigne`. Dans cette fonction, utilisez le paramètre passé pour récupérer le texte de la tâche et l'insérer dans la ligne, au lieu de `champ.value`.


## Etape 7 - Mettre à jour l'objet: Etat

L'état de la case à cocher est géré automatiquement par le naviguateur, mais l'état des objets dans le tableau `todos` ne l'est pas.

- Ajoutez un événement de type 'input` sur la case à cocher.
- A chaque clic, inversez la propriété `etat` du todo en question.
- Vérifiez le changement d'état avec `console.log()`

Indices:
- || Comme à l'étape 5, utilisez un querySelector pour séléctionner le input dans la ligne.||


## Etape 8 - Mettre à jour les objets: Supprimer un objet

Dans le cadre de l'événement de clic sur une croix, supprimer le todo en question du tableau `todos`.

Indices:
- Trouver le todo correspondant avec ||`Array.indexOf`||. Solution: ||`const index = todos.indexOf(todo)`||.
- Supprimer ce todo avec ||`Array.splice()`||. Solution: ||`todos.splice(index, 1);`||


## Reste en live coding...

→ [Revoir la captation du cours](https://rec.unil.ch/videos/s12-liste-de-taches-vanilla-todos-localstorage-bootstrap/)
