import { ExerciceId } from '@type/exercice/ExerciceId';
//import axios from 'axios';

/**
 * Service de gestion des appels au service stratégie
 */
export class StrategieService {
  /**
   *
   * @param id ID de l'exercice courant.
   * @returns L'id de l'exercice suivant
   * @throws Error si l'exercice n'a pas été trouvé
   */
  public static async getIdNextSimpleById(
    id: ExerciceId['id'],
  ): Promise<ExerciceId['id']> {
    // Make a request for an exercice with a given ID
    try {
      var nextId = 'idtest';
      // dans le tableau des ID prendre le suivant
      // pour simplifier envoyer toujours le même suivant
      // coder en dur ici
      var listeExo = ['exo1','exo2','exo3'];
      for(let i=0;i<listeExo.length;i++){
        if(listeExo[i]==id){
          nextId=listeExo[(i+1)%listeExo.length];
        }
      }
      
      return nextId; 
    } catch (err) {
      throw new Error(`Not found: ${err}`);
    }
  }
}
