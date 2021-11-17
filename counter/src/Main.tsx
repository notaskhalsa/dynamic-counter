import React, { useState } from 'react'
import App, { CountState } from './App';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";


const Main = () => {
    const [click, setClick] = useState(0);
    const [buttonsData, setButtonsData] = useState([] as CountState[]);
  
    const handleDelete = (counterID: number) => {
      const deletedCounter:CountState[] = buttonsData.filter(x => x.id!== counterID);
      console.log("the element deleted" , counterID);
      setButtonsData((buttonsData) => [...deletedCounter]);
    }
  
    const handleReset = () => {
      const resetCounter:CountState[] = buttonsData.map(x => {
        x.value = 0;
        return x;
      });
      setButtonsData((buttonsData) => [...resetCounter]);
    }
  
    const handleIncrement = (counterData:CountState) => {
      const newButtonsData = [...buttonsData];
      const index = buttonsData.indexOf(counterData);
      newButtonsData[index] = {...counterData};
      newButtonsData[index].value++;
      setButtonsData((buttonsData) => [...newButtonsData]);
    }
  
    const handleDecrement = (counterData:CountState) => {
      const newButtonsData = [...buttonsData];
      const index = buttonsData.indexOf(counterData);
      newButtonsData[index] = {...counterData};
      newButtonsData[index].value--;
      setButtonsData((buttonsData) => [...newButtonsData]);
    }
  
    const createNewButtonData = () => {
      setButtonsData((buttonsData) => [...buttonsData, { id: click, value: 0 }]);
      console.log(click);
      setClick((click) => click + 1);
    }
    return(
        <React.Fragment>
            <Navbar  totalCounters={buttonsData.filter(c => c.value>0).length} />
            <div className="ms-n2">
                <App newCounter={createNewButtonData} counterData={buttonsData} onReset={handleReset} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            </div>
        </React.Fragment>
    )
}

export default Main;