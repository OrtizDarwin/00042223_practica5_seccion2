export default function Carrito({ items, onClear }) {
  const total = items.reduce((acc, it) => acc + it.unidades * it.precio, 0);
  return (
    <aside className="cart">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p className="muted">Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {items.map(({ id, nombre, unidades, precio }) => (
            <li key={id} className="cart-item">
              <span>{nombre}</span>
              <span>x{unidades}</span>
              <span>${(precio * unidades).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <strong>Total: ${total.toFixed(2)}</strong>
        <button onClick={onClear} disabled={items.length === 0}>Vaciar carrito</button>
      </div>
    </aside>
  );
}
