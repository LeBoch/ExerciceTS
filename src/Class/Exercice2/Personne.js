"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    getNom() {
        return this.nom;
    }
    getAdresse() {
        return this.adresse;
    }
    getNotes() {
        return this.prenom;
    }
    setName(newNom) {
        this.nom = newNom;
    }
    setNotes(newPrenom) {
        this.prenom = newPrenom;
    }
    setAdresse(adresse) {
        this.adresse = adresse;
    }
}
exports.Personne = Personne;
