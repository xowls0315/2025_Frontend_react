import { useState } from "react";
import Button from "./Button";
import Box from "./Box";
import Text from "./Text";
import Input from "./Input";

function App() {
  // const [textColor1, setTextColor1] = useState("black");
  // const [textColor2, setTextColor2] = useState("black");
  // const [textColor3, setTextColor3] = useState("black");

  // // 조건 체크 함수
  // const isValidLength = (text) => text.length >= 4 && text.length <= 12;
  // const isValidSpecialChar = (text) =>
  //   [..."!#@&*"].some((x) => text.includes(x));
  // const isValidNumber = (text) =>
  //   [..."0123456789"].some((x) => text.includes(x));
  const [value, setValue] = useState("");

  const validLength = (value) => 4 <= value.length && value.length <= 12;
  const validSpecial = (value) => [..."!#@&*"].some((v) => value.includes(v));
  const validHasNum = (value) =>
    [..."0123456789"].some((v) => value.includes(v));

  return (
    <>
      <Input setValue={(e) => setValue(e.target.value)} />

      {/* 유효하면 글씨색 초록색 변경, 아니면 검은색 유지 */}
      {/* Text 컴포넌트 만들어서 바꾸기 */}
      <Text valid={validLength(value)} text="글자 길이: 4~12" />
      <Text
        valid={validSpecial(value)}
        text="글자에 !,#,@,&,* 중 하나 반드시 포함"
      />
      <Text valid={validHasNum(value)} text="글자에 반드시 숫자 포함!" />
    </>
  );
}

export default App;
