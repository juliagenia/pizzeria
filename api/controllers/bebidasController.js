import Bebida from '../models/Bebidas.js';

// GET /api/bebidas -> retorna todas las bebidas
const getAll = async (req, res) => {
  try {
    const bebidas = await Bebida.findAll();
    res.json(bebidas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las bebidas' });
  }
};

// GET /api/bebidas/:id -> retorna una bebida por id o 404
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const bebida = await Bebida.findByPk(id);

    if (!bebida) {
      return res.status(404).json({ error: 'Bebida no encontrada' });
    }

    res.json(bebida);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la bebida' });
  }
};

export { getAll, getById };
