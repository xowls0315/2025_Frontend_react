import { useState, useEffect } from "react";
import "./Title.css";

const Title = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}시 ${minutes}분 ${seconds}초`);
    };

    updateClock(); // 초기 렌더 시 바로 표시
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <div className="title">
      <div className="title__text">
        Nice Day, <span>God Bless You!</span>
      </div>
      <span className="title__time">현재 시간은 {currentTime} 입니다.</span>
    </div>
  );
};

export default Title;
