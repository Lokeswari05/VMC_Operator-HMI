import { useState } from "react";
import "./App.css"
import "./index.css"
import ProgressStepper from "./components/ProgressStepper";
import MachineChecks from "./components/MachineChecks";
import ToolSetup from "./components/ToolSetup";
import WorkpieceSetup from "./components/WorkpieceSetup";
import ReadyReview from "./components/ReadyReview";
import Operation from "./components/Operation"

function App() {
  const machineInfo = {
    operatorName: "Arun Kumar",
    machineId: "VMC-001",
    cncProgram: "VMC_BRACKET_01",
    workOffset: "G54",
};

  const [currentStage, setCurrentStage] = useState(1);
  const [completedStage, setCompletedStage] = useState(0);
  const progressPercentage = (completedStage / 5) * 100;

  const [machineComplete, setMachineComplete] = useState(false);
  const [toolsComplete, setToolsComplete] = useState(false);
  const [workpieceComplete, setWorkpieceComplete] = useState(false);
  const [operationStatus, setOperationStatus] = useState("READY");
  return (
    <div className="app">
      <header className="top-strip">
        <div>
          <span className="label">OPERATOR</span>
          <strong>{machineInfo.operatorName}</strong>
        </div>

        <div>
          <span className="label">MACHINE</span>
          <strong>{machineInfo.machineId}</strong>
        </div>

        <div>
          <span className="label">CNC PROGRAM</span>
          <strong>{machineInfo.cncProgram}</strong>
        </div>

        <div>
          <span className="label">WORK OFFSET</span>
          <strong>{machineInfo.workOffset}</strong>
        </div>

        <div>
          <span className="label">MODE</span>
          <strong>{operationStatus}</strong>
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
            onNext= {(complete) => {
              if(complete){
                setMachineComplete(true);
                setCurrentStage(2);
                setCompletedStage(1);
              }
            }}/>
        )}
        {currentStage === 2 && (
          <ToolSetup  
            onNext={(complete) => {
              if(complete){
                setToolsComplete(true);
                setCurrentStage(3);
                setCompletedStage(2);
                }
            }}
          />
        )}
        {currentStage === 3 && (
          <WorkpieceSetup 
            onNext ={(complete) =>{
              if(complete){
                setWorkpieceComplete(true);
                setCurrentStage(4);
                setCompletedStage(3);
              }
            }}
          />
        )}
        {currentStage === 4 && (
          <ReadyReview
          machineComplete = {machineComplete}
          toolsComplete = {toolsComplete}
          workpieceComplete = {workpieceComplete}
          onNext = {() => {
            setCurrentStage(5);
            setCompletedStage(4);
          }}
        />
        )}
        {currentStage === 5 && (
          <Operation 
            status={operationStatus}
            setStatus={setOperationStatus}
          />
        )}
        
      </main>
    </div>
  );
}

export default App;