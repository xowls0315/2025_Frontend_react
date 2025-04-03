const Status = (props) => {
  const statusObj = {
    confirmed: {
      name: "확정",
      color: "#5D7D2B",
    },
    completed: {
      name: "완료",
      color: "#9BA1A5",
    },
    need: {
      name: "확정필요",
      color: "#EA0029",
    },
  };

  return (
    <div style={{ color: statusObj[props.status].color, fontWeight: "bold" }}>
      {statusObj[props.status].name}
    </div>
  );
};

export default Status;
