import { Router } from 'express';
import strategieRouter from './strategie.route';

/**
 * Routeur global de l'application. Utilise les routeurs des ressources.
 */
const globalRouter = Router();

globalRouter.use('/next', strategieRouter);

export default globalRouter;
