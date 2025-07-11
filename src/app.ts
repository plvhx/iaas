import express from 'express';
import insultRoutes from './routes/insultRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/insult', insultRoutes);
app.use(errorHandler);

export default app;
