
// T0
// Stocker les données suivantes dans un tableau
// Eric, 17 ans, Lausanne
// Charlotte, 46 ans, Pully
t = [['Eric', '17 ans', 'Lausanne'], ['Charlotte', '46 ans', 'Pully']];

// T1
// Stocker les données suivantes dans un tableau
// 5.5, 2.7, 3.9, 5.4, 5.5
t = [5.5, 2.7, 3.9, 5.4, 5.5];

// T2
// Stocker les données suivantes dans un tableau
// Eric, 5.5, 2.7, 3.9, 5.4, 5.5
// Charlotte, 3.9, 5.4, 5.5, 5.5, 4.0
t = [['Eric', 5.5, 2.7, 3.9, 5.4, 5.5], ['Charlotte', 3.9, 5.4, 5.5, 5.5, 4.0]];


// Soit le tableau suivant (Ex T3 → T5)
t = [['Eric', 4.5, 3.5], ['Charlotte', 5.5, 4.5]];

// T3
// Afficher "Eric et Charlotte"
console.log(`${t[0][0]} et ${t[1][0]}`);
document.write(`${t[0][0]} et ${t[1][0]}`); // ou
document.write(t[0][0] + ' et ' + t[1][0]); // ou encore

// Note: pour utiliser document.write() travaillez dans VS Code et omettez
// la construction de la structure HTML. Seul l'élément <script> est nécessaire.

// T4
// Afficher "Eric : 4.5, 3.5"
document.write(`${t[0][0]} : ${t[0][1]}, ${t[0][2]}`)

// T5
// Afficher "Moyenne d'Eric : 4"
// Afficher "Moyenne de Charlotte : 5"
document.write('Moyenne d\'Eric : ' + (t[0][1] + t[0][2]) / 2);
document.write('Moyenne de Charlotte : ' + (t[1][1] + t[1][2]) / 2);

// Les exercices T6 à T8 n'étaient pas pertinents

// T9
// Créer une fonction qui pour le tableau [3, 4, 5] retourne
// le texte '3--4--5'.
t9 = [3, 4, 5];
for(let i = 0; i < t9.length; i++) {
    document.write(i);
    if (i < t9.length - 1) {
        document.write('--');
    }
}

// Ou mieux, avec Array.join()
document.write(t9.join('--'));
