import express from 'express';
import { router } from './routes/index.js';

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.route('/')
// app.route('/signup')
// app.route('/login')
// app.route('/:id/history')
app.use('/api/v1', router)

export default app;