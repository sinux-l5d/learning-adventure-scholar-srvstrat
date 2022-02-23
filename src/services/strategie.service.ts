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
  public static async getIdNextSimpleById(id: ExerciceId['id']): Promise<ExerciceId['id'] | null> {
    // dans le tableau des ID prendre le suivant
    // pour simplifier envoyer toujours le même suivant
    // coder en dur ici
    const listeExo = ['exo1', 'exo2', 'exo3'];

    listeExo.forEach((value, index, array) => {
      if (value === id) {
        // si out range return null sinon renvoie l'id suivant
        return listeExo[index + 1] ?? null;
      }
    });

    //TODO:throw error
    return null;
  }
}
