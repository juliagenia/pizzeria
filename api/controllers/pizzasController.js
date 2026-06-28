import Pizza from '../models/Pizza.js';

// GET /api/pizzas -> retorna todas las pizzas
const getAll = async (req, res) => {
  try {
    const pizzas = await Pizza.findAll();
    res.json(pizzas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las pizzas' });
  }
};

// GET /api/pizzas/:id -> retorna una pizza por id o 404
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const pizza = await Pizza.findByPk(id);

    if (!pizza) {
      return res.status(404).json({ error: 'Pizza no encontrada' });
    }

    res.json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la pizza' });
  }
};

export { getAll, getById };
