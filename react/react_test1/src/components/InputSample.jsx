import { useState } from "react";

function InputSample() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [upperInput, setUpperInput] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleReset() {
    setInputValue("");
  }

  function handleEmailCheck(e) {
    const email = e.target.value;

    setEmail(email);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email)
    setIsValid(isValid)
  }

  function handleUpperCheck(e) {
    setUpperInput(e.target.value.toUpperCase())
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <p></p>
      <button onClick={handleReset}>초기화 버튼</button>
      <p>입력한 값 : {inputValue}</p>
      <p>글자 수 : {inputValue.length}</p>
      <hr />
      <div>
        <div>이메일 : <input type="text" onChange={handleEmailCheck}/></div>
        <p>이메일 = {email}</p>
        <div>{email.length===0? '이메일을 입력하세요' : isValid?'이메일 확인':'이메일 형식에 맞지 않습니다.'}</div>
      </div>
      <hr />
        <div>
        <div>대문자 변환기 : <input type="text" onChange={handleUpperCheck}/></div>
        <p>-- 변환한 값 --</p>
        <div>{upperInput}</div>
      </div>
    </>
  );
}

export default InputSample;