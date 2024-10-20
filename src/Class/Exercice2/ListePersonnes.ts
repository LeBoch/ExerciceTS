import { Personne } from "./Personne";

export class ListePersonnes {
    
    personnes: Personne[];
   
    constructor(personnes: Personne[]) {
      this.personnes = personnes;
     
    }
     getPersonnes() : Personne[]{
        return this.personnes; 
      }  
    
      public findByNom(s: string): Personne | null {
        for (const personne of this.personnes) {
            if (personne.getNom() === s) {
                return personne;
            }
        }
        return null;
    }

    public findByCodePostal(cp: number): boolean {
        for (const personne of this.personnes) {
            if (personne.getAdresse().getCodePostal() === cp) {
                return true;
            }
        }
        return false;
    }
  }

  