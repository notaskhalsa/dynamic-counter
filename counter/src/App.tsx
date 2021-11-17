import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.css";

export type CountState = {
  id: number;
  value: number;
};

const App = (props:any) => {
  const {counterData, onDelete, onIncrement, onDecrement, onReset, newCounter} = props
  return (
    <div className="App">
      <div>
        <div className = "btn-container">
          <button className = "btn btn-info btn-lg mb-5 w-25 me-4" onClick={newCounter}>new counter</button>
          <button className = "btn btn-info btn-lg mb-5 w-25" onClick={onReset}>Reset</button>
        </div> 
        {counterData.map((x:CountState) => {
          return <Counter key={x.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counterData={x} />
        })}
      </div>
    </div>
  );
}

export default App;

