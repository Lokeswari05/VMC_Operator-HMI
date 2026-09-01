import { useState } from "react";

function ToolSetup({onNext}){
    const cncProgram = "VMC_BRACKET_01";
    const programRevision =  "Rev A";
    const tools = [
        {
            number: "T01",
            type: "10 mm Flat End Mill",
        },
        {
            number: "T02",
            type: "6 mm Flat End Mill",
        },
        {
            number: "T03",
            type: "8 mm Drill",
        },
        {
            number: "T04",
            type: "10 mm Spot Drill",
        },
    ];

    const[confirmedTools, setConfirmedTools] = useState([]);
    function handleConfirm(toolNumber){
        setConfirmedTools((previousTools) => {
            if(previousTools.includes(toolNumber)){
                return previousTools;
            }
            else{
                return [...previousTools, toolNumber];
            }
        });
    }

    
    return(
        <div className = "stage-card">
            <h2>Required Tools</h2>
            <p> CNC Program: {cncProgram}</p>
            <p>Program Revision: {programRevision}</p>

            <div className = "tool-list">
                
                {tools.map((tool) => (
                    <div className = "tool-item"
                        key ={tool.number}
                    >
                        <span>{tool.number}</span>
                        <span>{tool.type}</span>

                        <span className = "tool-status">
                            {confirmedTools.includes(tool.number) ? "READY" : "PENDING"}
                        </span>

                        <button
                            onClick = {() => handleConfirm(tool.number)}
                            disabled = {confirmedTools.includes(tool.number)}
                        >
                            {confirmedTools.includes(tool.number) ? "Confirmed" : "Confirm"}
                        </button>

                        
                    </div>
                ))}
            </div>

            <p className = " check-progress">
                {confirmedTools.length} / {tools.length} tools confirmed
            </p>

            <button
                onClick = {onNext}
                disabled = {confirmedTools.length !== tools.length}
            >
                Next
            </button>
            
        </div>
    )
}
export default ToolSetup