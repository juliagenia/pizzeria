import dotenv from 'dotenv';
import sequelize from '../models/index.js';
import Pizza from '../models/Pizza.js';

dotenv.config();

const pizzas = [
  {
    nombre: 'Muzzarella',
    descripcion: 'Salsa de tomate, muzzarella y oregano',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Napolitana',
    descripcion: 'Muzzarella, tomate en rodajas, ajo y perejil',
    precio: 5200,
    imagen: 'https://images.unsplash.com/photo-1586190848861-99aa5a171e90?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Especial',
    descripcion: 'Muzzarella, jamon y morrones',
    precio: 5600,
    imagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Calabresa',
    descripcion: 'Muzzarella y longaniza calabresa',
    precio: 5800,
    imagen: 'https://images.unsplash.com/photo-1628840042765-356cda07518e?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Cuatro Quesos',
    descripcion: 'Muzzarella, provolone, parmesano y fontina',
    precio: 6200,
    imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Jamon y Morron',
    descripcion: 'Muzzarella, jamon y morrones al natural',
    precio: 5500,
    imagen: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Fugazzetta',
    descripcion: 'Muzzarella y cebolla',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1565299507177-b0ac66763825?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Margherita',
    descripcion: 'Salsa de tomate, muzzarella, albahaca y aceite de oliva',
    precio: 5300,
    imagen: 'https://images.unsplash.com/photo-1590947132387-155cc35f33de?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Pepperoni',
    descripcion: 'Salsa de tomate, muzzarella y pepperoni',
    precio: 6000,
    imagen: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop',
  },
  {
    nombre: 'Hawaiana',
    descripcion: 'Muzzarella, jamon y anana',
    precio: 5400,
    imagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
  },
];

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexion a la BD OK');

    await Pizza.bulkCreate(pizzas, { ignoreDuplicates: true });
    console.log(`Se cargaron ${pizzas.length} pizzas correctamente`);

    process.exit(0);
  } catch (error) {
    console.error('Error al ejecutar el seed:', error.message);
    process.exit(1);
  }
};

run();
