import express from 'express';
import { transfer } from './bank.controllers.js';

export const router = express.Router();

router.post('/', transfer);
