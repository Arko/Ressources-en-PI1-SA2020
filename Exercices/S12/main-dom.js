'use strict';

// Références
const liste = document.querySelector('ul');
const champ = document.querySelector('input');
const bouton = document.querySelector('button');

// Evénements
bouton.addEventListener('click', créerTodo);

function créerTodo() {
    if (champ.value) {
        ajouterLigne(champ.value);
        enregistrer();
        champ.value = '';
    }
}

function ajouterLigne(texte, etat = false) {
    const ligne = document.createElement('li');

    // Coche
    let coche = document.createElement('input');
    coche.setAttribute('type', 'checkbox');
    if (etat) coche.setAttribute('checked', true);
    coche.addEventListener('input', enregistrer);
    ligne.appendChild(coche);

    // Span texte
    const spanTexte = document.createElement('span');
    spanTexte.innerText = texte;
    ligne.appendChild(spanTexte);

    // Span effacer
    let spanEffacer = document.createElement('span');
    spanEffacer.className = 'effacer';
    spanEffacer.innerHTML = '&times;';
    spanEffacer.addEventListener('click', function() {
        this.parentNode.remove();
        enregistrer();
    });
    ligne.appendChild(spanEffacer);

    // Ajouter ligne
    liste.appendChild(ligne);
}

function enregistrer() {
    const string = JSON.stringify(obtenirListeDepuisDOM());
    console.log('Enregistré:', string);
    localStorage.setItem('vanillaTodosList', string);
}

function obtenirListeDepuisDOM() {
    const lineItems = Array.from(document.querySelectorAll('li'));
    const todos = [];
    lineItems.forEach(li => {
        todos.push({
            etat: li.children[0].checked,
            texte: li.children[1].innerText
        });
    });
    return todos;
}

function obtenirListeDepuisLocalStorage() {
    const string = localStorage.getItem('vanillaTodosList');
    console.log('Restauré:', string);
    return JSON.parse(string) || [];
}

function afficherListe() {
    liste.innerHTML = '';
    const todos = obtenirListeDepuisLocalStorage();
    todos.forEach(todo => {
        ajouterLigne(todo.texte, todo.etat);
    });
}

afficherListe();
