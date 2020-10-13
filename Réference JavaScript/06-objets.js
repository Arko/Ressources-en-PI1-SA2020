// Objets
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object

const contact = { prenom: 'Saul', nom: 'Goodman' };
const contact = {
    prenom: 'Saul',
    nom: 'Goodman',
};
contact.nom;    // 'Goodman'
contact[nom];   // 'Goodman'
contact.tel = '505-842-5662';   // Ajout d'une propriété à un objet
contact[tel] = '505-842-5662';   // Ajout d'une propriété à un objet

// N'importe quel type d'expression peut être utilisée pour affecter
// une propriété d'objet ou un élément de tableau
