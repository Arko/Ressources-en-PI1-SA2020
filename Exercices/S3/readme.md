# Série 3 - Fonctions

## Exercice 1

Créez des fonctions de calcul basiques (soustraction, addition, etc). Testez vos fonctions!
Par exemple:

```js
function somme(n, m) {
	return n + m;
}
```

Test et output:

```js
somme(2, 3); // 5
```

## Exercice 1 - bonus

Utilisez les calculs réalisés précédemment et créez un objet `calculs` ou même `calculatrice` qui a pour méthodes les fonctions de calcul explorée précédemment (addition, soustraction, division, multiplication, carré, et j'en passe)!

[Solution](https://codepen.io/DigitalDW/pen/QZpJYW)

## Exercice 2

Complétez le code suivant pour obtenir l'output attendu:

```js
function age(anneeActuelle, anneeNaissance, nom) {
	// A completer
}
```

Output:

```js
age(2020, 1997, "Loris"); // *Bonjour Loris, vous avez 23 ans !*
```

[Solution](https://codepen.io/DigitalDW/pen/ePWOXa)

## Exercice 3

Creer la fonction longueur() qui permette d'obtenir le résultat suivant ([indice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length)):

```js
function addition(a, b) {
	return a + b + longueur("chaine qui fait 36 caractère de long");
}
```

Output:

```js
console.log(addition(4, 10)); // 50 -> 4 (a) + 10 (b) + 36 (longueur de la chaîne de caractères)
```

[Solution](https://codepen.io/DigitalDW/pen/jeBggL)

## Exercice 4

Compléter la fonction:

```js
function miseEnCitation(nom, texte) {
	// A completer
}
```

Output:

```js
console.log(miseEnCitation("Loris", "The Crew 2 est vraiment très sympa")); // Loris: "The Crew 2 est vraiment très sympa"
```

[Solution](https://codepen.io/DigitalDW/pen/MPmgzZ)

# Série 3 - DOM

## Exercice 1

Sur la base de ce code HTML... :

```html
<ul>
	<li>1er élément</li>
	<li class="elementPair">2ème élément</li>
	<li>3ème élément</li>
	<li class="elementPair">4ème élément</li>
	<li id="le5emeElement">5ème élément</li>
</ul>
```

1.1) Sélectionnez le premier `<li>` de la liste et écrivez son contenu (`innerHTML`) dans la console.

1.2) Sélectionnez les éléments `<li>` qui ont la class `"elementPair"` et changez leur couleur de texte en bleu.

1.3) Sélectionnez l'élément qui a l'id `"le5emeElement"`. Changez sa couleur de son background en orange et la couleur de son texte en blanc.

<details>
  <summary>Solution</summary>
  
  ```js
  // 1.1
  const premierElement = document.querySelector('li');
  console.log(premierElement.innerHTML);
  
  // 1.2
  const elementsPairs = document.getElementsByClassName('elementPair');
  elementsPairs[0].style.color = 'blue';
  elementsPairs[1].style.color = 'blue';
  // Solution avec forEach
  elementsPairs.forEach((elementPair) => elementPair.style.color = 'blue')
  
  // 1.3
  const cinquiemeElement = document.getElementById('le5emeElement');
  cinquiemeElement.style.backgroundColor = 'orange';
  cinquiemeElement.style.color = 'white';
  ```

</details>

## Exercice 2

Sur la base de ce code HTML... :

```html
<span id="entree">Du contenu à déplacer</span> <span id="sortie"></span>
```

2.1) Sélectionnez le `<span>` avec l'id `"entree"` et écrivez son contenu (`innerHTML`) dans une variable.

2.2) Remplacez le contenu (`innerHTML`) de ce même `<span>` par `"Contenu déplacé !"`.

2.3) Écrivez le contenu du premier `<span>` (stocké dans une variable au point 1.1) dans le `<span>` avec l'id `"sortie"` : commencez par sélectionner le deuxième `<span>` et écrivez son contenu (`innerHTML`).

À la fin de l'exercice, votre HTML devrait ressembler à ça :

```html
<span id="entree">Contenu déplacé !</span>
<span id="sortie">Du contenu à déplacer</span>
```

<details>
  <summary>Solution</summary>
  
  ```js
  // 2.1
  const entree = document.getElementById('entree');
  const contenuEntree = entree.innerHTML;
  
  // 2.2
  entree.innerHTML = 'Contenu déplacé !';
  
  // 2.3
  const sortie = document.getElementById('sortie');
  sortie.innerHTML = contenuEntree;
  ```

</details>

## Exercice 3

Sur la base du code suivant :

```html
<ul>
	<li>1er élément</li>
	<li>2ème élément</li>
	<li>3ème élément</li>
</ul>

<script>
	const couleurs = ["red", "blue", "green"];
	// A completer
</script>
```

3.1) Sélectionnez tous les éléments `<li>` et stockez la sélection dans une variable.

3.2) Assigner les couleurs du tableau `couleurs` aux éléments correspondants dans votre sélection.

3.2.1) Donnez la couleurs `"red"` au premier élément (donc assignez la première valeur du tableau `couleurs` au premier élément de votre sélection).

3.2.2) Donnez la couleurs `"blue"` au deuxième élément (donc assignez la deuxième valeur du tableau `couleurs` au deuxième élément de votre sélection).

3.2.3) Donnez la couleurs `"green"` au troisième élément (donc assignez la troisième valeur du tableau `couleurs` au troisième élément de votre sélection).

<details>
  <summary>Solution</summary>
  
  ```html
  <ul>
    <li>1er élément</li>
    <li>2ème élément</li>
    <li>3ème élément</li>
  </ul>

  <script>
    const couleurs = [
      "red",
      "blue",
      "green",
    ];

    // Solution
    //3.1
    const elements = document.querySelectorAll('li');
    
    //3.2
    elements[0].style.color = couleurs[0]; // 3.2.1
    elements[1].style.color = couleurs[1]; // 3.2.2
    elements[2].style.color = couleurs[2]; // 3.2.3
    
    // Solution avec forEach
    elements.forEach((element, i) => element.style.color = couleurs[i])
  </script>

````

</details>


## Exercice 4

Créez le HTML suivant avec JavaScript (`document.createElement()`, `document.body.appendChild()`, etc) :
```html
<h2>Exercice 4</h2>
<p>Je crée les choses avec JS !</p>
<p>C'est <span style="color: red">difficile</span> mais je sais que je vais y arriver !</p>
<p>Si c'est trop dur, il y a toujours <a href="https://devdocs.io/">devdocs.io</a>...</p>
````

<details>
  <summary>Solution</summary>
  
  ```js
  // titre
  const titre = document.createElement('h2');
  titre.innerHTML = 'Exercice 4';
  document.body.appendChild(titre);
  
  // premier p
  const p1 = document.createElement('p');
  p1.innerHTML = 'Je crée les choses avec JS !';
  document.body.appendChild(p1);
  
  // deuxieme p
  const p2 = document.createElement('p');
  
  // 1ere façon de faire:
  p2.innerHTML = 'C\'est <span style="color: red">difficile</span> mais je sais que je vais y arriver !';
  
  // 2eme façon de faire:
  const span = document.createElement('span');
  span.innerHTML = 'difficile';
  span.style.color = 'red';
  p2.innerHTML = 'C\'est ';
  p2.appendChild(span);
  p2.innerHTML += ' mais je sais que je vais y arriver !';
  
  document.body.appendChild(p2);
  
  // troisieme p
  const p3 = document.createElement('p');
  
  // 1ere façon de faire:
  p3.innerHTML = 'Si c\'est trop dur, il y a toujours <a href="https://devdocs.io/">devdocs.io</a>...';
  
  // 2eme façon de faire:
  const a = document.createElement('a');
  a.innerHTML = 'devdocs.io';
  a.href = 'https://devdocs.io/';
  p3.innerHTML = 'Si c\'est trop dur, il y a toujours ';
  p3.appendChild(a);
  p3.innerHTML += '...';
  
  document.body.appendChild(p3);
  
  ```

</details>
