import Product from "./Product";
import styles from "./ProductList.module.css";

export function ProductList({ products }) {
  return (
    <div className={styles.productsContainer}>
      {products.map(({ id, ...product }) => {
        return <Product key={id} product={product} />;
      })}
    </div>
  );
}
