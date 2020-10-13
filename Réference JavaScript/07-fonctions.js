// Fonctions
///////////////////////////////////////////////////////////////////////////////
// https://developer.mozilla.org/fr/docs/Glossaire/Fonction

// Bénéfice des fonctions
//  1. grouper des instructions
//  2. nommer ce groupe
//  3. réutiliser ce groupe
// => Structurer le code (et la penseée)

// Fonction nommée
function direBonjour() {
    console.log('Bonjour !');
}
direBonjour();   // Dans la console: 'Bonjour !'

// Fonction anonyme affectée à une variable 
const direBonjour = function () {
    console.log('Bonjour !');
}
direBonjour();   // Dans la console: 'Bonjour !'

// Fonction féchée (ES6)
const direBonjour = () => {
    //...
};

// Plus d'informations sur les fonctions fléchées: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

// Exemple d'utilisation d'une fonction fléchée
const elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
];
console.log(elements.map((element) => element.length)); // Nous découvrirons plus tard .map()
// Dans la console: Array [8, 6, 7, 9]


// Paramètres et arguments
function direBonjour(nom) {
    // la fonction `direBonjour` reçoit `nom` en paramètre
    console.log(`Bonjour ${nom} !`);
}
// la fonction `direBonjour` est apellée avec 'Saul' comme argument
direBonjour('Saul');    // Dans la console: 'Bonjour Saul !'


// Valeur de retour d'une fonction, l'instruction `return`
function ajouter(a, b) {
    return a + b;       // Retourne la valeur de l'expression a + b
}
x = ajouter(1, '23');   // x = '123'


// Les fonctions peuvent être imbriquées
function ajouterCarrés(a, b) {
    function carré(x) {
        return x * x;
    }
    return carré(a) + carré(b);
}

// Cas particulier: expression de fonction invoquée immédiatement (IIFE)
(function foo() {
    console.log("Hello Foo");
})();

// Hoisting
// https://developer.mozilla.org/fr/docs/Glossaire/Hoisting
// L'utilisation d'une fonction *nommée* peut précéder sa déclaration. Car durant
// l'interpretation de votre script, les déclarations des fonctions sont
// mises en mémoire avant l'éxectution du code.
foo(); // 'Hello'
function foo () {
    return 'Hello';
}