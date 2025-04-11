import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

dotenv.config();

const username = encodeURIComponent(process.env.USER_NAME || '');
const password = encodeURIComponent(process.env.USER_PASSWORD || '');

const uri =  `mongodb+srv://${username}:${password}@cluster0.os34z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri).then(() => {
  const port = 3001;
  const app = express();

  app.use(express.json());
  app.use(router);

  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('❌ Error connecting to MongoDB:', error);
});
