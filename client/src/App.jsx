import { useState } from "react";
import "./App.css"
import "./index.css"
import ProgressStepper from "./components/ProgressStepper";
import MachineChecks from "./components/MachineChecks";
import Tools from "./components/Tools";


function App() {
  const [currentStage, setCurrentStage] = useState(1);
  return (
    <div className="app">
      <header className="top-strip">
        <div>
          <span className="label">OPERATOR</span>
          <strong>Arun Kumar</strong>
        </div>

        <div>
          <span className="label">MACHINE</span>
          <strong>VMC-001</strong>
        </div>

        <div>
          <span className="label">CNC PROGRAM</span>
          <strong>AL_COMP_001_REV_A.nc</strong>
        </div>

        <div>
          <span className="label">WORK OFFSET</span>
          <strong>G54</strong>
        </div>

        <div>
          <span className="label">MODE</span>
          <strong>SETUP</strong>
        </div>
      </header>

      <main className="main-content">
        <h1>VMC Operator HMI</h1>
        <p>Machine Checks</p>

        <ProgressStepper currentStage = {currentStage}/>
        <MachineChecks  onNext= {() => setCurrentStage(2)}/>
        <Tools  onNext={() => setCurrentStage(3)}/>
      </main>
    </div>
  );
}

export default App;