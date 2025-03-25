// props: object

const Welcome = (props) => {
  const color = { color: props.color };

  return (
    <h3 onClick={props.handleClick} style={color}>
      Hello, {props.name}!{props.emoji}
    </h3>
  );
};

export default Welcome;
