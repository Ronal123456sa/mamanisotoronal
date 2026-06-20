import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productList.module.css";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div>
      <h1 className={styles.titulo}>Tienda de Ropa</h1>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
