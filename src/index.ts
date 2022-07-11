import app from '@app';
import config from '@config';

/** Port par défaut */
const port: number = Number(config.APP_PORT_EXT) || 3002;
const server = app.listen(port, () => {
  console.log('Server is running on port ' + port + ' in ' + config.NODE_ENV + ' mode');
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received.');
  server.close(() => {
    console.log('Server closed.');
  });
});
