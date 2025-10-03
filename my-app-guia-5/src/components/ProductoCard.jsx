export default function ProductoCard({ item, onAdd, onRemove, cantidadEnCarrito = 0 }) {
  const { nombre, precio, stock, categoria } = item;
  return (
    <div className="card">
      <h3 className="card-title">{nombre}</h3>
      <p className="muted">Categoría: {categoria}</p>
      <p><strong>${precio.toFixed(2)}</strong></p>
      <p className="muted">Stock: {stock}</p>
      <div className="row">
        <button onClick={() => onRemove(item)} disabled={cantidadEnCarrito === 0}>– Quitar</button>
        <span className="qty">{cantidadEnCarrito}</span>
        <button onClick={() => onAdd(item)} disabled={cantidadEnCarrito >= stock}>+ Agregar</button>
      </div>
    </div>
  );
}
