

// INTERACTION AVEC LE DOM /////////////////////

// Saisir le premier <p>
const el = document.querySelector('p');
// Stocker son contenu dans une variable
let valeur = el.innerHTML;
// Modifier son contenu
el.innerHTML = 'Hello <b>world</b>!';

// Saisir tous les <p> avec la classe "joli"
const els = document.querySelectorAll('p.joli');
// Modifier le contenu de chacun
els.forEach(el => el.innerHTML = 'autre');

// Créer un lien
const lien = document.createElement('a');
// Ajouter le texte du lien
lien.innerText = 'Cliquez ici';
// Ajouter un attribut (la cible du lien)
lien.setAttribute('href', 'https://unil.ch');
// Ajouter une classe
lien.classList.add('bleu-unil');
// Ajouter ce lien à la page
document.body.appendChild(lien);
// Ajouter un événement de survol
lien.addEventListener('mouseover', () => {
    alert('Cliquez ici!');
});


// FONCTIONS ///////////////////////////////////

// Déclarer une fonction
function doubler(n) {
    return n * 2;
}
// Idem avec fonction fléchée
const doubler = (n) => n * 2;
// Appeler une fonction
doubler(8); // 16

// OPERATEURS //////////////////////////////////

13 % 4      // 1
5 == 5      // true
5 != 6      // true
'a' + 'b'   // 'ab'

let n = 4;
n = n + 1;  // n = 5
n += 1;     // n = 6
n++;        // n = 7

// CONDITIONS ///////////////////

let n = 10;
if (n < 5) {
    // n plus petit que 5
} else if (n >= 5 && n <= 10) {
    // n entre 5 et 10
} else {
    // n supérieur à 10
}
// Opérateur ternaire
alert(n > 10 ? 'oui' : 'non');

// BOUCLES //////////////////////

// Afficher 0123456789
for (let i = 0; i < 10; i++) {
    document.write(i);
}
// Afficher 02468
for (let i = 0; i < 10; i += 2) {
    document.write(i);
}

// Objets //////////////////////////////////////

// Déclarer un objet
const obj = {};
// Déclarer et remplir
const obj = {
    age: 30,
    nom: 'Dupuis',
    notes: [4, 5, 5, 7],
};
// Accéder à une propriété
let age = obj.age;
// Méthode alternative
let age = obj['age'];
// Accéder à la dernière note
obj.notes[obj.notes.length - 1];
// Redéfinir une propriété
obj.age = 31;
// Ajouter une propriété
obj.prenom = 'Vania';
// Accéder dynamiquement à une propriété
let maPropriété = 'nom';
let valeur = obj[maPropriété];

// TABLEAUX ////////////////////////////////////

// Déclarer un tableau
let tab = [];
// Déclarer et remplir
let tab = [3, 4, 'salut'];
// Obtenir la taille du tableau
let taille = tab.length;   // 3
// Accéder à la deuxième valeur
let valeur = tab[1];       // 4
// Définir la troisième valeur
tab[2] = '5';
// Ajouter une valeur à la fin
tab.push(6);   // [3, 4, 5, 6]
// Doubler les valeurs dans un nouveau tableau
let doubles = tab.map(x => x * 2);
// Filtrer le tableau
let impairs = tab.filter(n => n % 2)
// Vérifier si tab contient la valeur 5
let resultat = tab.includes(5); // true
// Obtenir les deux premières valeurs
let valeurs = tab.slice(0, 2);
// Assembler les valeurs d'un tableau avec
// un séparateur et retourner une chaîne
let txt = tab.join('-');      // '3-4-5-6'

// MATH ////////////////////////////////////////

// Obtenir une valeur aléatoire entre 1 et 100
let valeur = Math.ceil(Math.random() * 100);

