function handleBackgroundColor(color='red') {
  document.body.style.backgroundColor = color;  
}

function handleChange(e) {
  console.log(e.target.value);
}

function handleKeyUp(e) {
  console.log(e.key)
}

function ChangeBackgroundColor() {

  return (
    <>
      <h1>배경색 변경하기</h1>
      <div>
        <button onClick={()=>handleBackgroundColor('red')}>빨강</button>
        <button onClick={()=>handleBackgroundColor('blue')}>파랑</button>
        <button onClick={()=>handleBackgroundColor('green')}>초록</button>
        <button onClick={()=>handleBackgroundColor('white')}>흰색</button>
      </div>
      <div>
        <h2>입력 추적기</h2>
        <h4>입력된 값 전체 출력</h4>
        <input type="text" placeholder="아무거나 입력해보세요" onChange={handleChange}/>
        <h4>현재 입력한 값 출력</h4>
        <input type="text" onKeyUp={handleKeyUp}/>
        <p>콘솔을 확인하세요!</p>
    </div>
    </>
  );
}

export default ChangeBackgroundColor;
