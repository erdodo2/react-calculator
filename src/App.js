import { useState } from 'react';
import './App.css';

import Inputs from "./Inputs";
import Buttons from "./Buttons";



function App() {
    const [localValue, setLocalValue] = useState("0");
    const setValue = (value) => {
        setLocalValue(value);
        console.log(value)
    }
  return (
    <div className="app text-white">

        <div className="container ">
            <div className="d-flex justify-content-center  align-items-center" style={{height:"100vh"}}>

                <div className="card bg-dark" style={{width:"350px"}}>
                    <div className="card-body">

                        <div className="d-flex flex-column">
                            <span className={"h2"}>Calculator</span>
                            <Inputs value={localValue}></Inputs>
                            <Buttons value={localValue} setValue={setLocalValue}></Buttons>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
  );
}

export default App;
