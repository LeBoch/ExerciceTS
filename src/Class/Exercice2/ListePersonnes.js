"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
class ListePersonnes {
    constructor(personnes) {
        this.personnes = personnes;
    }
    getPersonnes() {
        return this.personnes;
    }
    findByNom(s) {
        for (const personne of this.personnes) {
            if (personne.getNom() === s) {
                return personne;
            }
        }
        return null;
    }
    findByCodePostal(cp) {
        for (const personne of this.personnes) {
            if (personne.getAdresse().getCodePostal() === cp) {
                return true;
            }
        }
        return false;
    }
}
exports.ListePersonnes = ListePersonnes;
