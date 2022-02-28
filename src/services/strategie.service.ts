import { ExerciceId } from '@type/exercice/ExerciceId';

/**
 * Service de stratégie
 */
export class StrategieService {
  public static readonly listeExo = ['exo1', 'exo2', 'exo3'];

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

    if (id === 'init') {
      return this.listeExo[0];
    }

    let res = null;
    this.listeExo.forEach((value, index, array) => {
      if (value === id) {
        // si out range return null sinon renvoie l'id suivant
        res = array[index + 1] ?? null;
      }
    });

    //TODO: throw error. Ou peut-être pas ? Renvoie null par défaut si l'exercice n'est pas trouvé
    return res;
  }
}
