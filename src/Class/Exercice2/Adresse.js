"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
class Adresse {
    constructor(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    getRue() {
        return this.rue;
    }
    getVille() {
        return this.ville;
    }
    getCodePostal() {
        return this.codePostal;
    }
    setCodePostal(newCodePostal) {
        this.codePostal = newCodePostal;
    }
    setVille(newVille) {
        this.ville = newVille;
    }
    setCodeRue(newRue) {
        this.rue = newRue;
    }
}
exports.Adresse = Adresse;
