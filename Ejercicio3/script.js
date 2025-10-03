const estanteria = {
  libros: [
    { nombre: 'El Quijote', autor: 'Miguel de Cervantes', leido: false },
    { nombre: 'Cien años de soledad', autor: 'G. García Márquez', leido: true },
    { nombre: 'Clean Code', autor: 'Robert C. Martin', leido: false },
  ],
  log() {
    // Imprime estado para cada libro con el formato pedido
    return this.libros.map(l =>
      l.leido
        ? `Ya has leído ${l.nombre} de ${l.autor}`
        : `Aún no has leído ${l.nombre} de ${l.autor}`
    );
  },
  sugerencia() {
    const noLeidos = this.libros.filter(l => !l.leido);
    if (noLeidos.length === 0) return '¡Ya leíste todo! 🎉';
    const i = Math.floor(Math.random() * noLeidos.length);
    const l = noLeidos[i];
    return `Sugerencia: ${l.nombre} — ${l.autor}`;
  },
  agregar(libro) {
    this.libros.push(libro);
    render();
  }
};

function render() {
  const ul = document.getElementById('lista');
  ul.innerHTML = '';
  estanteria.libros.forEach((l, i) => {
    const li = document.createElement('li');
    li.style.padding = '6px 0';
    li.textContent = `${l.nombre} — ${l.autor} ${l.leido ? '✅' : '📖'}`;
    ul.appendChild(li);
  });
}

document.getElementById('add').addEventListener('click', () => {
  const nombre = document.getElementById('titulo').value.trim() || 'Sin título';
  const autor = document.getElementById('autor').value.trim() || 'Anónimo';
  const leido = document.getElementById('leido').value === 'true';
  estanteria.agregar({ nombre, autor, leido });
});

document.getElementById('btn-log').addEventListener('click', () => {
  const salida = estanteria.log().join('\n');
  document.getElementById('salida').textContent = salida;
});

document.getElementById('btn-sugerencia').addEventListener('click', () => {
  document.getElementById('salida').textContent = estanteria.sugerencia();
});

render();
