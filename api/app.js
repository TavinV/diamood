import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Routers
import assetsRouter from './routes/assets.js';
import loginRouter from './routes/login.js';
import adminRouter from './routes/admin.js';

const app = express();

dotenv.config();
app.use(bodyParser.json());

app.use('/assets', assetsRouter)
app.use('/api/login', loginRouter);
app.use('/api/admin', adminRouter);

export default app;