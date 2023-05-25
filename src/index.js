import app from './app';
import config from './config';
import './database';

app.listen(config.SERVER_PORT || 4200, () => {
  console.log(`Server is listening on http://localhost:${config.SERVER_PORT}/`);
});
