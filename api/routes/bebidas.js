import express from 'express';
import { getAll, getById } from '../controllers/bebidasController.js';

const router = express.Router();

// GET /api/bebidas
router.get('/', getAll);

// GET /api/bebidas/:id
router.get('/:id', getById);

export default router;
