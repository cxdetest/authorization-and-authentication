import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import { createRoles } from './libs/initialSetup';

import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();
createRoles();
app.use(express.json());
app.use(morgan('dev'));

app.set('pkg', pkg);

app.get('/', (req, res) =>
  res.json({
    author: pkg.author,
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
  })
);

app.use('/products', productsRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

export default app;
