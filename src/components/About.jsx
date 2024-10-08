import React, { useState } from "react";
// import Header from "./Header";
import Sidebar from "./Sidebar";

export default function About() {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <Sidebar />

      <div className="Container">
        <h2>Munish Kumar</h2>
        <p>Developer in Toxsl Technologies</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={handleReset}>Reset</button>
        <p>Total Clicks: {count}</p>
      </div>
    </>
  );
}