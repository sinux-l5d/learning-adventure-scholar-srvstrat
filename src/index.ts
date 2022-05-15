import app from '@app';
import config from '@config';

/** Port par défaut */
const port: number = Number(config.APP_PORT_EXT) || 3003;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
