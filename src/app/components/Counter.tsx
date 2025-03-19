"use client"; // Required for client-side interactivity

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { increment, decrement, incrementByAmount,decrementByAmount } from "@/redux/slices/counterSlice";
import "./counter.css"; 

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    
    <div className="counter-container">
        <h1>Made By Dev Chawla</h1>
    <h1>Counter: {count}</h1>
    <div className="button-group">
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <button onClick={() => dispatch(decrement())} disabled={count === 0}>
        - 1
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
      <button onClick={() => dispatch(decrementByAmount(5))} disabled={count < 5}>
        - 5
      </button>
    </div>
  </div>
  );
}
