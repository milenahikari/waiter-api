import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const uri =  `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.os34z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri).then(() => {
  const port = 3001;
  const app = express();

  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('❌ Error connecting to MongoDB:', error);
});
