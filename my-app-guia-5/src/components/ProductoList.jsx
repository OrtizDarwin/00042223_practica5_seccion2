import ProductoCard from "./ProductoCard";

export default function ProductoList({ productos, carrito, onAdd, onRemove }) {
  const cantidades = carrito.reduce((acc, it) => {
    acc[it.id] = it.unidades;
    return acc;
  }, {});
  return (
    <section className="grid">
      {productos.map((p) => (
        <ProductoCard
          key={p.id}
          item={p}
          onAdd={onAdd}
          onRemove={onRemove}
          cantidadEnCarrito={cantidades[p.id] || 0}
        />
      ))}
    </section>
  );
}
