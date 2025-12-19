import './Counter.css';
import { useState } from 'react';

function Counter() {

  // let count = 0;
  const [count, setCount] = useState(0);

  function addCount(){
    setCount(count+1);
    console.log(count);
  }
  function resetCount(){
    setCount(0);
    console.log(count);
  }
  function subCount(){
    setCount(count-1);
    console.log(count);
  }
  return (
    <div className="counter">
      <h1 className="count">{count}</h1>
      <div className="buttons">
        <button onClick={subCount}>-</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={addCount}>+</button>
      </div>
    </div>
  );
}

export default Counter;