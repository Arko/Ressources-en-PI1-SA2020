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
    const index = todos.indexOf(todo);

    ligne.innerHTML = `
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="check-${index}" ${todo.etat ? 'checked' : ''}>
        <label class="custom-control-label" for="check-${index}">${todo.texte}</label>
        <a href="#" class="text-decoration-none">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </a>
    </div>
    `;

    ligne.querySelector('input').addEventListener('input', () => {
        todo.etat = !todo.etat;
        enregistrer();
    });

    ligne.querySelector('a').addEventListener('click', () => {
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        enregistrer();
        afficherListe(); // Rafraîchir la liste après l'effacement d'un élément);
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
