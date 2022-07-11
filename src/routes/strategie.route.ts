import { Router, RequestHandler } from 'express';
import { StrategieService } from '@services/strategie.service';

const serviceRouter = Router();

/**
 * Renvoie L'id suivant de l'id présent dans le chemin
 *
 * @param req Objet Request d'Express
 * @param res Object Response d'Express
 */
const getNextId: RequestHandler = async (req, res, next) => {
  const { strategie, exerciceCourant, exercices } = req.body;
  let idSuivant;
  try {
    idSuivant = StrategieService.getNextId(strategie, exerciceCourant, exercices);
    res.status(200).json({ id: idSuivant });
  } catch (error) {
    next(error);
  }
};

serviceRouter.post('/', getNextId);

export default serviceRouter;
