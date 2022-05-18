import { ExerciceComplet } from '@type/exercice/ExerciceComplet';
import { AppError } from '@helpers/AppError.helper';

/**
 * Service de stratégie
 */
export class StrategieService {
  /**
   *
   * @param strategie La stratégie à utiliser
   * @param exerciceCourant ID de l'exercice courant
   * @param exercices Liste des exercices
   * @returns L'id de l'exercice suivant
   *
   * @throws AppError si l'exercice n'a pas été trouvé parmis les exercices.
   */
  public static getNextId(
    strategie: string,
    exerciceCourant: ExerciceComplet['id'],
    exercices: ExerciceComplet[],
  ): ExerciceComplet['id'] | undefined {
    if (strategie !== 'lineaire') throw new AppError(`Stratégie '${strategie}' inconnue`, 400);

    if (!exerciceCourant) {
      return exercices[0]?.id; // undefined si liste vide
    }

    for (const [index, exercice] of exercices.entries())
      if (exercice.id === exerciceCourant) return exercices[index + 1]?.id; // undefined si pas de suivant

    throw new AppError(`L'exercice ${exerciceCourant} n'est pas parmi les exercices soumis`, 404);
  }
}
