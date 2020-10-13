// Manipulation du DOM (Document Object Model)
// https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model

document.write('Hello World!'); // Ajoute le texte "Hello World!" à la fin du document

let el = document.querySelector('p');  // Saisir le premier <p>
let valeur = el.innerHTML; // Stocker son contenu
el.innerHTML = '<b>Oy</b>'; // Remplacer son contenu

let els = document.querySelectorAll('p.small'); // Saisir tous les p avec classe 'small'
els.forEach((el) => el.innerHTML = 'Trololo'); // Modifier le contenu de chacun

// Ajouter un nouvel élément via JS et définir ses propriétés
let lien = document.createElement('a');         // créer un nouvel élément <a>
lien.innerHTML = 'Cliquez ici';                 // y ajouter du contenu texte
lien.setAttribute('href', 'https://unil.ch');   // définir la cible du lien
lien.classList.add('rouge');                    // ajouter la class rouge
document.body.appendChild(lien);                // ajouter le lien en fin de corps de page
lien.addEventListener('mouseover', (e) => {     // ajouter un événement
    console.log('Cliquez !');
})