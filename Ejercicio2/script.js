const carrito = {
  productos: [],
  get precioTotal() {
    return this.productos.reduce((acc, p) => acc + p.unidades * p.precio, 0);
  },
  agregarProducto(prod) {

    const idx = this.productos.findIndex(x => x.nombre.toLowerCase() === prod.nombre.toLowerCase());
    if (idx >= 0) this.productos[idx].unidades += prod.unidades;
    else this.productos.push({ ...prod });
    this.render();
  },
  eliminarPorIndice(i) {
    this.productos.splice(i, 1);
    this.render();
  },
  render() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    this.productos.forEach((p, i) => {
      const tr = document.createElement('tr');
      const subtotal = (p.unidades * p.precio).toFixed(2);
      tr.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.unidades}</td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>$${subtotal}</td>
        <td><button class="borrar" data-i="${i}">Quitar</button></td>
      `;
      tbody.appendChild(tr);
    });
    document.getElementById('total').textContent = carrito.precioTotal.toFixed(2);
    tbody.querySelectorAll('.borrar').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const i = Number(e.currentTarget.dataset.i);
        carrito.eliminarPorIndice(i);
      });
    });
  }
};

document.getElementById('agregar').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim() || 'Producto';
  const unidades = Math.max(1, Number(document.getElementById('unidades').value));
  const precio = Math.max(0, Number(document.getElementById('precio').value));
  carrito.agregarProducto({ nombre, unidades, precio });
});
