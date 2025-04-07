import styles from "./Button.module.css";

const Button = (props) => {
  // const buttonStyle = props.isSky
  //   ? `${styles.button} ${styles.sky}`
  //   : `${styles.button} ${styles.grey}`;

  const styleObject = {
    white: styles.white,
    grey: styles.grey,
    sky: styles.sky,
    trans: styles.trans,
  };

  return (
    <button className={`${styles.button} ${styleObject[props.type]}`}>
      {props.text}
    </button>
  );
};

export default Button;
