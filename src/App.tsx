import React, { useState } from "react";
import api from "./shared/api";

function App() {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [msg, setMsg] = useState<string>("");

  const add = () => {
    api.math
      .add(number1, number2)
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => {
        setMsg(err.response.data);
      });
  };

  const subtract = () => {
    api.math
      .subtract(number1, number2)
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => {
        setMsg(err.response.data);
      });
  };

  const multiply = () => {
    api.math
      .multiply(number1, number2)
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => {
        setMsg(err.response.data);
      });
  };

  const divide = () => {
    api.math
      .divide(number1, number2)
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => {
        setMsg(err.response.data);
      });
  };

  const pow = () => {
    api.math
      .pow(number1, number2)
      .then((res) => {
        setMsg(res.data);
      })
      .catch((err) => {
        setMsg(err.response.data);
      });
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <p>Number 1:</p>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <p>Number 2:</p>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button onClick={() => add()}>Add</button>
        <button onClick={() => subtract()}>Subtract</button>
        <button onClick={() => multiply()}>Multiply</button>
        <button onClick={() => divide()}>Divide</button>
        <button onClick={() => pow()}>Pow</button>
      </div>
      <p>{msg}</p>
    </div>
  );
}

export default App;
