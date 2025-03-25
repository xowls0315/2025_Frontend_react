const SmoothButton = () => {
  const primary = {
    padding: "10px 45px",
    backgroundColor: "#205BF3",
    border: "none",
    color: "white",
    margin: "20px",
    borderRadius: "5px",
  };
  const secondary = {
    padding: "10px 45px",
    backgroundColor: "#478DF5",
    border: "none",
    color: "white",
    margin: "20px",
    borderRadius: "5px",
  };
  return (
    <div style={{ display: "flex" }}>
      <button style={primary}>Button</button>
      <button style={secondary}>Button</button>
    </div>
  );
};

export default SmoothButton;
