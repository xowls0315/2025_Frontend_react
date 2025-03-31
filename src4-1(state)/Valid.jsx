import { useState } from "react";

const Valid = () => {
  // input에 입력한 값의 길이가 4~10글자 넘어가면
  // 입력한 값이 유효하지 않아요!
  // 아니면 입력한 값이 유효합니다!

  const [valid, setValid] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          e.target.value.length >= 4 && e.target.value.length <= 10
            ? setValid("입력한 값이 유효합니다!")
            : setValid("입력한 값이 유효하지 않아요!");
        }}
        type="text"
      />
      <div>{valid}</div>
    </>
  );
};

export default Valid;
