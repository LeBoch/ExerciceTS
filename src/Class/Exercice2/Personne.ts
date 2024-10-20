import { Adresse } from "./Adresse";

export class Personne {
    nom: string;
    prenom: string;
    adresse: Adresse;
  
   constructor(nom: string, prenom: string, adresse:Adresse) {
     this.nom = nom;
     this.prenom = prenom;
     this.adresse = adresse
    }

    getNom(){
       return this.nom;
     }  

     public getAdresse(): Adresse {
      return this.adresse;
  }

    getNotes(){
       return this.prenom;
     }

   setName(newNom:string) {
       this.nom = newNom;
   }
   setNotes(newPrenom:string) {
       this.prenom = newPrenom;
   }
   public setAdresse(adresse: Adresse): void {
    this.adresse = adresse;
}
 }

 