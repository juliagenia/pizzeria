import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Bebida = sequelize.define(
  'Bebida',
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
    tableName: 'bebidas',
    timestamps: false,
  }
);

export default Bebida;
