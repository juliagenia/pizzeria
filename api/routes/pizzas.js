import express from 'express';
import { getAll, getById } from '../controllers/pizzasController.js';

const router = express.Router();

// GET /api/pizzas
router.get('/', getAll);

// GET /api/pizzas/:id
router.get('/:id', getById);

export default router;
