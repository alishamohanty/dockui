import express from 'express';
import containerRouter from './routes/containers';
import imageRouter from './routes/images';
import networkRouter from './routes/networks';
import volumeRouter from './routes/volumes';
import authRouter from './routes';

const app = express();

app.use('/', authRouter);
app.use('/container', containerRouter);
app.use('/image', imageRouter);
app.use('/network', networkRouter);
app.use('/volume', volumeRouter);

export default app;
