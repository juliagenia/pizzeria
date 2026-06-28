import { useState } from 'react'
import Lista from './components/Lista'
import ListaB from './components/ListaBebidas'
import PizzaDetalle from './components/PizzaDetalle'

function App() {

  const [pizzaSeleccionadaId, setPizzaSeleccionadaId] = useState(null)

  return (
    <>

      <h1>BEBIDAS</h1>

      <ListaB />
      <hr />

      {pizzaSeleccionadaId ? (
        <PizzaDetalle
          id={pizzaSeleccionadaId}
          onVolver={() => setPizzaSeleccionadaId(null)}
        />
      ) :
        <Lista onSeleccionar={setPizzaSeleccionadaId} />}
    </>
  )
}

export default App
