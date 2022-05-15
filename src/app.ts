import express from 'express';
import { handleMiddlewareErrors } from '@middlewares/error.middleware';
import globalRouter from '@routes';
import config from '@config';

/**
 * Application express gérant les appelles aux fonctions en fonction du chemin
 */
const app = express();

app.use(express.json());

// Désactive le header indiquant que c'est une application express
app.disable('x-powered-by');

app.use(function (_req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.use(config.APP_ROOT ?? '/', globalRouter);

// Doit être en dernier
app.use(handleMiddlewareErrors);

export default app;
