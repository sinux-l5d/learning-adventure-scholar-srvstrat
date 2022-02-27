import { Router, RequestHandler } from 'express';
import { StrategieService } from 'src/services/strategie.service';

const serviceRouter = Router();

/**
 * Renvoie L'id suivant de l'id présent dans le chemin
 *
 * @param req Objet Request d'Express
 * @param res Object Response d'Express
 */
const getIdNext: RequestHandler = async (req, res, next) => {
  const id = req.params.id;
  // On recupère l'id suivant (en dur pour l'instant)
  StrategieService.getIdNextSimpleById(id)
    .then((idSuivant) => {
      res.status(200).json({ next: idSuivant });
    })
    .catch(next);
};

serviceRouter.get('/:id', getIdNext);

export default serviceRouter;
