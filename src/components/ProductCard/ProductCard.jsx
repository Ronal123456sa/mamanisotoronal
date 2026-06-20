import styles from "./productCard.module.css";

const ProductCard = ({ producto }) => {
  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
      <div className={styles.info}>
        <h3 className={styles.nombre}>{producto.nombre}</h3>
        <p className={styles.categoria}>{producto.categoria}</p>
        <p className={styles.precio}>S/. {producto.precio.toFixed(2)}</p>
        <span className={producto.disponible ? styles.disponible : styles.agotado}>
          {producto.disponible ? "Disponible" : "Agotado"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
