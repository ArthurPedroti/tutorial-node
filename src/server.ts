import 'reflect-metadata';
import express from 'express';
import './database';
import './shared/container'
import routes from './shared/routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('listening on port 3333');
})