const Button = (props) => {
  const style = {
    color: "white",
    padding: "10px 45px",
    border: "none",
    margin: "20px",
    backgroundColor: props.bg,
    borderRadius: props.br,
  };

  return (
    <button
      onClick={() => {
        alert("이것은 버튼입니다!!");
      }}
      style={style}
    >
      Button
    </button>
  );
};

export default Button;
