import React, { useState, useEffect } from "react";

export const StoreView = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count är " + count);
    return () => {
      console.log("Hej då!");
    };
  }, [count]);
  return (
    <div>
      <h1>Product</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
