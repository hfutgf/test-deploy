import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <span>{counter}</span>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default App;
