import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

mongoose.connect('XXX')
  .then( () => {
    const app = express();
    const port = 3002;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads').replace('\\src', '')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
    console.log('conectado ao mongodb');
  })
  .catch( () => console.log('erro ao conectar no mongodb'));



