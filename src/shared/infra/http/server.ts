import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import '@shared/infra/typeorm';
import routes from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  /* eslint-disable no-console */
  console.log('🚀 Server is running on port:3333');
});
