import { FaExclamationCircle } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { MdOutlineLuggage } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";

const Card = (props) => {
  return (
    <div style={{ width: "200px", height: "350px", border: "1px solid black" }}>
      <div
        style={{
          width: "100%",
          height: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {props.type}이벤트운임
        <FaExclamationCircle
          style={{
            marginLeft: "5px",
            color: "white",
            border: "1px solid gray",
            borderRadius: "9999px",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "50%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          color: "gray",
          fontSize: "17px",
          gap: "5px",
        }}
      >
        <div>
          <MdAirlineSeatReclineExtra />
          {props.seat}이코노미 좌석
        </div>
        <div>
          <MdOutlineLuggage />
          {props.inWeight}10KG
        </div>
        <div>
          <IoBagHandle />
          {props.outWeight}없음
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {props.price}매진
      </div>
    </div>
  );
};

export default Card;
