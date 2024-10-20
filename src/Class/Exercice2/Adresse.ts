export class Adresse {
    
    rue: string;
    ville: string;
    codePostal:number;
   
    constructor(rue: string, ville: string, codePostal:number) {
      this.rue = rue;
      this.ville = ville;
      this.codePostal = codePostal;
    }
     getRue(){
        return this.rue;
      }  
    getVille(){
        return this.ville;
      }

      getCodePostal(){
        return this.codePostal;
      }

    setCodePostal(newCodePostal:number) {
        this.codePostal = newCodePostal;
    }

    setVille(newVille:string) {
        this.ville = newVille;
    }

    setCodeRue(newRue:string) {
        this.rue = newRue;
    }
  
  }

  