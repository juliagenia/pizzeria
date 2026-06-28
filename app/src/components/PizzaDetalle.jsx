import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

function PizzaDetalle({ id, onVolver }) {
  const [pizza, setPizza] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/pizzas/${id}`)
        setPizza(data)
      } catch (err) {
        console.error(err)
        setError('No se pudo obtener la pizza')
      } finally {
        setCargando(false)
      }
    }
    fetchPizza()
  }, [id])

  if (cargando)
    return <p className="text-center text-xl text-gray-600 p-8">Cargando...</p>

  if (error)
    return (
      <div className="text-center p-8">
        <p className="text-xl text-red-600 mb-4">{error}</p>
        <button
          onClick={onVolver}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Volver
        </button>
      </div>
    )

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg text-center">
      <img
        src={pizza.imagen}
        alt={pizza.nombre}
        className="w-full max-h-72 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold mt-4 mb-2">{pizza.nombre}</h2>
      <p className="text-gray-600 mb-4">{pizza.descripcion}</p>
      <p className="text-xl font-bold text-green-600 mb-6">
        Precio: ${pizza.precio}
      </p>
      <button
        onClick={onVolver}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver
      </button>
    </div>
  )
}

export default PizzaDetalle
