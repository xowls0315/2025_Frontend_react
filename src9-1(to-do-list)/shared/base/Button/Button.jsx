import "./Button.css";

const Button = (props) => {
  return (
    <button className="button-33" onClick={props.addTask}>
      {props.text}
    </button>
  );
};

export default Button;
