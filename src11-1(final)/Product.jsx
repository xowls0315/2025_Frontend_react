import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="" />
      <span>⭐{props.rating}</span>
      <span>{props.title}</span>
    </div>
  );
};

export default Product;
