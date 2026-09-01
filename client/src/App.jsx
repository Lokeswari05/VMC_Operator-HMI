import { useState } from "react";
import "./App.css"
import "./index.css"
import ProgressStepper from "./components/ProgressStepper";
import MachineChecks from "./components/MachineChecks";
import ToolSetup from "./components/ToolSetup";
import WorkpieceSetup from "./components/WorkpieceSetup";


function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const [completedStage, setCompletedStage] = useState(0);
  const progressPercentage = (completedStage / 5) * 100;
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

        <ProgressStepper 
          currentStage = {currentStage} 
          progressPercentage = {progressPercentage}
        />

        {currentStage === 1 && (
          <MachineChecks  
            onNext= {() => {
              setCurrentStage(2);
              setCompletedStage(1);
            }}/>
        )}
        {currentStage === 2 && (
          <ToolSetup  
            onNext={() => {
              setCurrentStage(3);
              setCompletedStage(2);
          }}/>
        )}
        {currentStage === 3 && (
          <WorkpieceSetup 
            onNext ={() =>{
              setCurrentStage(4);
              setCompletedStage(3);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;