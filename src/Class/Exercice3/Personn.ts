interface Person {
    name: string;
    birth: number;
    death: number;
}

const db: Array<Person> = [
    { name: "Thales", birth: 625, death: 547 },
    { name: "Anaximandre", birth: 600, death: 546 },
    { name: "Heraclite", birth: 544, death: 480 },
];

function getSortedNames(database: Array<Person>): Array<string> {
    return database.map(person => person.name).sort();
}

function getPeopleBornAfter544(database: Array<Person>): Array<Person> {
    return database.filter(person => person.birth > 544);
}

function PeopleBornAfter544(database: Array<Person>): void {
    const peopleBornAfter544 = getPeopleBornAfter544(database);
    console.table(peopleBornAfter544);
}

console.log("Liste des noms avec ordres alphabétiques:", getSortedNames(db));
console.log("Personnes nées après 544:", getPeopleBornAfter544(db));

PeopleBornAfter544(db);
