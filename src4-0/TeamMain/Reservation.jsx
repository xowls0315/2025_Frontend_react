import { FaCheckCircle } from "react-icons/fa";

const Reservation = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            width: "20%",
            border: "1px solid black",
            padding: "20px 0px",
            textAlign: "center",
          }}
        >
          예매하기
        </div>
        <div
          style={{
            width: "20%",
            color: "#737576",
            border: "1px solid #737576",
            padding: "20px 0px",
            textAlign: "center",
          }}
        >
          공지사항
        </div>
        <div
          style={{
            width: "20%",
            color: "#737576",
            border: "1px solid #737576",
            padding: "20px 0px",
            textAlign: "center",
          }}
        >
          구단안내
        </div>
        <div
          style={{
            width: "20%",
            color: "#737576",
            border: "1px solid #737576",
            padding: "20px 0px",
            textAlign: "center",
          }}
        >
          요금/할인카드
        </div>
        <div
          style={{
            width: "20%",
            color: "#737576",
            border: "1px solid #737576",
            padding: "20px 0px",
            textAlign: "center",
          }}
        >
          좌석도
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          margin: "50px 30px 0px 30px",
          borderBottom: "1px solid black",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            backgroundColor: "#F8F9FA",
            borderRadius: "20px",
          }}
        >
          <FaCheckCircle style={{ marginRight: "10px" }} />
          홈경기만 보기
        </span>
      </div>
    </div>
  );
};

export default Reservation;
