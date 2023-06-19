import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, incrementByAmount } from "./counterSlice";
export function Counter() {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=> {dispatch(increment())} }>+ </button>
      <span>Count::{count}</span>
      <button onClick={()=> {dispatch(decrement())} }>-</button>
      <button onClick={()=>{dispatch(incrementByAmount(10))}}>Incement by 10</button>
    </div>
  );
}
