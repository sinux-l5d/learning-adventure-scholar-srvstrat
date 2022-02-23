import { ExerciceId } from '@type/exercice/ExerciceId';

/**
 * Service de stratégie
 */
export class StrategieService {
  /**
   *
   * @param id ID de l'exercice courant.
   * @returns L'id de l'exercice suivant
   * @throws Error si l'exercice n'a pas été trouvé
   */
  public static getIdNextSimpleById(id: ExerciceId['id']): ExerciceId['id'] | null {
    // dans le tableau des ID prendre le suivant
    // pour simplifier envoyer toujours le même suivant
    // coder en dur ici
    const listeExo = ['exo1', 'exo2', 'exo3'];

    let res = null;
    listeExo.forEach((value, index, array) => {
      if (value === id) {
        // si out range return null sinon renvoie l'id suivant
        res = array[index + 1] ?? null;
      }
    });

    //TODO:throw error
    return res;
  }
}
