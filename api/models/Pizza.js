import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Pizza = sequelize.define(
  'Pizza',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: 'pizzas',
    timestamps: false,
  }
);

export default Pizza;
