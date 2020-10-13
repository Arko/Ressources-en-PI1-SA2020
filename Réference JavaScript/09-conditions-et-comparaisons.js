// Structures de contrôle et opérateurs de comparaison
///////////////////////////////////////////////////////////////////////////////
// https://developer.mozilla.org/fr/docs/Glossaire/Structure_de_contr%C3%B4le
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison

// Valeur x de départ
let x = 10;

// Opérateurs de comparaison, expressions retournant une valeur booléenne
x == 10; // true
x != 10; // false

x === '10'; // false
x == '10';  // true
x !== '10'; // true

20 > 10; // true
10 < 20; // true

4 >= 3; // true
3 >= 3; // true

3 <= 4; // true


// Structure conditionnelle if...else
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
if (x < 10) {   // Instruction if et ouverture d'un bloc
    x++;        // Expression
}

// Il est possible d'utiliser `if` sans bloc de code (limité à une ligne)
if (x < 10) x++;

// Variante complète
if (condition) {
    // quelque chose
} else if (autre_condition) {
    // autre chose
} else {
    // ...
}


// Switch...case
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
switch (x) {
    case 0:
        // quelque chose si x == 0
        break;
    case 1:
        // quelque chose si x == 1
        break;
    case 2:
        // quelque chose si x == 2
        break;
    default:
        // opération si x != à 1, 2 ou 3
}

// Toujours utiliser l'instruction `break;` à la fin de chaque `case`!
// Sinon tous les cas restants sont executés.
