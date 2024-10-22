"use strict";
const db = [
    { name: "Thales", birth: 625, death: 547 },
    { name: "Anaximandre", birth: 600, death: 546 },
    { name: "Heraclite", birth: 544, death: 480 },
];
function getSortedNames(database) {
    return database.map(person => person.name).sort();
}
function getPeopleBornAfter544(database) {
    return database.filter(person => person.birth > 544);
}
function PeopleBornAfter544(database) {
    const peopleBornAfter544 = getPeopleBornAfter544(database);
    console.table(peopleBornAfter544);
}
console.log("Liste des noms dans l'ordre alphabétique:", getSortedNames(db));
console.log("Personnes nées après 544:", getPeopleBornAfter544(db));
PeopleBornAfter544(db);
