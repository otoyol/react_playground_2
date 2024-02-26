import React from "react";
import logo from "./logo.svg";
import "./App.css";
import courses from './images/courses.png';
import useCounter from "./hooks/useCounter";

const App = () => {
  const { counterValue, loading, updateCounterValue } = useCounter();

  const onCounterUpdate = async () => {
    const newCounterValue = counterValue + 1;

    updateCounterValue(newCounterValue);
  };

  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>How many people want to study Computer Science : {loading ? "Loading..." : counterValue}</p>

        <button style={{ height: '30px' }} onClick={onCounterUpdate} disabled={loading}>
          I want to study computer science too!
        </button>

        <br />

        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={courses} alt="CSI courses" style={{ width: '800px', height: 'auto' }} />
      </header>
    </div></>
  );
};

export default App;