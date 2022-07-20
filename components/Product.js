import styles from "./Product.module.css";

export default function Product({ product }) {
  const { thumbnail, title, description, price, discountPercentage, rating } =
    product;
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={thumbnail} alt="product" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.productPrice}>
        <p className={styles.price}>{price}€</p>
        <p>({discountPercentage} %)</p>
      </div>
      <p className={styles.productRating}>{rating} ⭐️</p>
    </div>
  );
}
