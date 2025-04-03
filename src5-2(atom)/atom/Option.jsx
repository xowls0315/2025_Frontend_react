const Option = (props) => {
  const optionObj = {
    confirmed: {
      color: "#4C5B35",
      backgroundColor: "#E9F3DC",
    },
    completed: {
      color: "#9BA1A5",
      backgroundColor: "#e9edf0",
    },
    need: {
      color: "#7D4C55",
      backgroundColor: "#FEE9EC",
    },
  };

  const { color, backgroundColor } = optionObj[props.status];

  return (
    <span
      style={{
        padding: "5px 15px",
        borderRadius: "20px",
        width: "fit-content",
        color,
        backgroundColor,
      }}
    >
      {props.contents}
    </span>
  );
};

export default Option;
