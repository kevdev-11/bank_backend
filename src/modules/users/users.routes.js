import express from 'express';
import { signup, login } from './users.controllers.js';

export const router = express.Router();

// router.get('/signup', register)
router.post('/signup', signup);
router.post('/login', login);
// router.get('/:id/history', getHistory);

