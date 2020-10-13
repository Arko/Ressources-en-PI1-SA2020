// Déclaration de variables et opérateurs d'affectation
///////////////////////////////////////////////////////////////////////////////

let x = 5;      // Plusieurs choses se passent:
let x;          // Déclaration d'une variable
x = 5;          // Affectation de la variable

// var, let, const et variables globales
z = 8;                  // Affectation d'une variable à portée globale (DANGER !)
var a;                  // Portée: contexte d'execution (fonction ou contexte global) (danger !)
let x;                  // Portée de bloc, peut être réafféectée
const y = 3;            // Portée de bloc, constante (ne pouvant être réafféectée), affectation obligatoire

// Usage de const avec tableaux ou objets
const monTableau = [];  // Portée de bloc, constante, éléments peuvent changer, affectation obligatoire
const monObjet = {};    // Portée de bloc, constante, propriétés peuvent changer, affectation obligatoire

// → Toujours déclarer vos variables avec let ou const !!!

// Exemple:
let x = 3;
const y = 4;
const monTableau = ['rouge', 'jaune', 'bleu'];

x = 5;                  // 5
y = 8;                  // Erreur !
monTableau[1] = 42;     // monTableau = ['rouge', 42, 'bleu']
monTableau = 3          // Erreur !
