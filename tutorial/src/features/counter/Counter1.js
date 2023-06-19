import React, { useState } from 'react';

export function Counter() {
  const [count,setCount] = useState(0)
  return (
    <div>
   <button onClick={ () => setCount(count+1)}>+ </button>
    <span >Count::{count}</span>
    <button onClick={ () => setCount(count-1)}>-</button>
    </div>
  );
}
