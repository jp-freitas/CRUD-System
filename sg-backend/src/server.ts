import express, { json } from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port http://localhost:3333');
});
