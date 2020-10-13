// Opérateurs arithmétiques et expressions
///////////////////////////////////////////////////////////////////////////////

// Exemple d'expression avec l'opérateur arithmétique d'addition
3 + 4   // retourne 7

// → Une expression retourne toujours une valeur
// → Une expression s'utilise généralement pour affecter une valeur à une variable
x = 3 + 4;  // x = 7
y = x + 2;  // y = 9

// Une expression peut aussi passer une valeur en paramètre à une fonction
ajouterScore(2 * 10);

// Exemples d'expressions avec différents opérateurs arithmétiques
7 - 2   // 5
4 / 5   // 0.8
2 * 2   // 4
10 % 3  // 1
2 ** 3  // 8

// Opérateurs d'incrémentation / décrémentation
let x = 0;  // x = 0
x++;        // x = 1
x++;        // x = 2
x--;        // x = 1

// Utilisation en préfixe / suffixe dans une affectation (utilisation pas recommandée !)
x = 0;
y = 0;
y = x++; // x = 1, y = 0    (retourne la valeur de x avant de l'incrémenter)
y = ++x; // x = 2, y = 2    (retourne la valeur de x après l'avoir incrémentée)

// Plus unaire / Négation unaire
+"3";    // 3 (peut servir à convertir une chaîne en nombre)
-"3";    // -3
x = 5;
y = -x;  // y = -5

// Combinaison d'opérateurs arithmétiques et d'affectation
let x = 4;
x += 2;     // x = 6
x -= 1;     // x = 5
x *= 5;     // x = 25
x /= 5;     // x = 5
x %= 3;     // x = 2
x **= 5;    // x = 32
