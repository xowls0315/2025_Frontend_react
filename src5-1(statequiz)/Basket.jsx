const Basket = (props) => {
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "150px",
          borderRadius: "10px",
          backgroundColor: "gainsboro",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "20px 15px",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>S</span>
          <span>X</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              padding: "20px 15px",
              fontWeight: "bold",
            }}
          >
            <button
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid gray",
                backgroundColor: "white",
              }}
              onClick={props.decrease}
            >
              -
            </button>
            <span
              style={{
                border: "1px solid gray",
                textAlign: "center",
                backgroundColor: "white",
                padding: "4px 20px",
              }}
            >
              {props.num}
            </span>
            <button
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid gray",
                backgroundColor: "white",
              }}
              onClick={props.increase}
            >
              +
            </button>
          </div>
          <div
            style={{
              padding: "20px 15px",
              fontWeight: "bold",
            }}
          >
            {props.num * props.price}원
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
