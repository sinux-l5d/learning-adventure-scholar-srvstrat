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
    try {
      // dans le tableau des ID prendre le suivant
      // pour simplifier envoyer toujours le même suivant
      // coder en dur ici
      var listeExo = ['exo1', 'exo2', 'exo3'];

      // si nous ne sommes pas au dernier exercice
      // il renvoie le suivant
      for (let i = 0; i < listeExo.length - 1; i++) {
        if (listeExo[i] == id) {
          return listeExo[(i + 1) % listeExo.length];
        }
      }

      // si l'exercice courant est en dernière position ou n'est pas dans la liste, il renvoie null.
      //TODO: Faut il renvoyer une erreur, "", "fini" ou null ?
      return null;
    } catch (err) {
      throw new Error(`Not found: ${err}`);
    }
  }
}
