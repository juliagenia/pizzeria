import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './models/index.js';

import pizzasRoutes from './routes/pizzas.js';
import bebidasRoutes from './routes/bebidas.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/pizzas', pizzasRoutes);
app.use('/api/bebidas', bebidasRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexion a la base de datos OK');
        // sequelize.sync({ alter: true }); // descomentar para sincronizar modelos (lo hace el alumno manualmente)
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar la base de datos:', error.message);
    });
