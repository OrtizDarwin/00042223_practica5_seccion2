import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductoList from "./components/ProductoList";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import { productos as DATA } from "./data/productos";

export default function App() {
  const [productos] = useState(DATA);
  const [carrito, setCarrito] = useState([]); // [{id, nombre, precio, unidades}]

  const addToCart = (prod) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === prod.id);
      if (existe) {
        if (existe.unidades >= prod.stock) return prev;
        return prev.map((p) => p.id === prod.id ? { ...p, unidades: p.unidades + 1 } : p);
      }
      return [...prev, { id: prod.id, nombre: prod.nombre, precio: prod.precio, unidades: 1 }];
    });
  };

  const removeFromCart = (prod) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === prod.id);
      if (!existe) return prev;
      if (existe.unidades === 1) return prev.filter((p) => p.id !== prod.id);
      return prev.map((p) => p.id === prod.id ? { ...p, unidades: p.unidades - 1 } : p);
    });
  };

  const clearCart = () => setCarrito([]);

  return (
    <div className="container">
      <Header
        titulo="Ejercicio Final – Guía 5"
        subtitulo="Objetos, Componentes y Props con un carrito simple"
      />
      <main className="layout">
        <ProductoList
          productos={productos}
          carrito={carrito}
          onAdd={addToCart}
          onRemove={removeFromCart}
        />
        <Carrito items={carrito} onClear={clearCart} />
      </main>
      <Footer autor="Wilber Calderón" />
    </div>
  );
}
