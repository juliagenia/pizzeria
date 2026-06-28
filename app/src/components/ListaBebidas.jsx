import { useEffect, useState } from 'react'
import axios from 'axios'
import Pizza from './Pizza'

const API_URL = 'http://localhost:3000/api'

function Lista({ onSeleccionar }) {
  const [pizzas, setPizzas] = useState([])


  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/bebidas`)
        setPizzas(data)
      } catch (err) {
        console.error(err)
        setError('Error al cargar las bebidas')
      } finally {
        setCargando(false)
      }
    }
    fetchPizzas()
  }, [])


  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestras bebidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza) => (
          <Pizza
            key={pizza.id}
            pizza={pizza}
            onClick={() => onSeleccionar(pizza.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Lista
