function Pizza({ pizza, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-4 text-center cursor-pointer shadow-md hover:-translate-y-1 transition"
    >
      <img
        src={pizza.imagen}
        alt={pizza.nombre}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-3">{pizza.nombre}</h3>
      <p className="text-green-600 font-bold">${pizza.precio}</p>
    </div>
  )
}

export default Pizza
