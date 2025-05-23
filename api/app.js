import express from 'express';
import dotenv from 'dotenv';

import assetsRouter from './routes/assets.js';

const app = express();
dotenv.config()

app.use('/assets', assetsRouter)

export default app;