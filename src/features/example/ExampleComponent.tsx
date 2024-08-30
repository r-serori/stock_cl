import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./exampleSlice";

const ExampleComponent = () => {
  // const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>Value: {value}</h1> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;
