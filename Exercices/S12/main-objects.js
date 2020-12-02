'use strict';

// Références
const liste = document.querySelector('ul');
const champ = document.querySelector('input');
const bouton = document.querySelector('button');

// Variables
const todos = restaurer() || [];

// Evénements
bouton.addEventListener('click', créerTodo);

function créerTodo() {
    if (champ.value) {
        // Création du todo
        const todo = {
            etat: false,
            texte: champ.value
        };

        // Ajouter le todo
        todos.push(todo);
        ajouterLigne(todo);
        enregistrer();
        champ.value = '';
    }
}

function ajouterLigne(todo) {
    const ligne = document.createElement('li');

    // Coche
    let coche = document.createElement('input');
    coche.setAttribute('type', 'checkbox');
    if (todo.etat) coche.setAttribute('checked', true);
    ligne.appendChild(coche);

    // Texte
    ligne.innerHTML += todo.texte;

    // Span effacer
    let span = document.createElement('span');
    span.innerHTML = '&times;';
    ligne.appendChild(span);

    ligne.querySelector('input').addEventListener('input', () => {
        todo.etat = !todo.etat;
        enregistrer();
    });

    ligne.querySelector('span').addEventListener('click', function() {
        this.parentNode.remove();

        const index = todos.indexOf(todo);
        todos.splice(index, 1);

        enregistrer();
    });

    // Ajouter ligne
    liste.appendChild(ligne);
}

function enregistrer() {
    const string = JSON.stringify(todos);
    console.log('Enregistré:', string)
    localStorage.setItem('vanillaTodosList', string);
}

function restaurer() {
    const string = localStorage.getItem('vanillaTodosList');
    console.log('Restauré:', string)
    return JSON.parse(string);
}

function afficherListe() {
    liste.innerHTML = '';
    todos.forEach(todo => {
        ajouterLigne(todo);
    });
}

afficherListe();
