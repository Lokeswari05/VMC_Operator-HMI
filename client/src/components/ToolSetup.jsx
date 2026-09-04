import { useEffect } from "react";
import { useState } from "react";

function ToolSetup({onNext}){
    const cncProgram = "VMC_BRACKET_01";
    // const programRevision =  "Rev A";
    const API_URI = import.meta.env.VITE_API_URI || "http://localhost:5000";
    const [tools, setTools] = useState([]);

    const[confirmedTools, setConfirmedTools] = useState([]);

    useEffect(() => {
        fetch(`${API_URI}/api/tools`)
        .then((response) => response.json())
        .then((data) => setTools(data));
    }, []); 

    // function handleConfirm(toolNumber){
    //     setConfirmedTools((previousTools) => {
    //         if(previousTools.includes(toolNumber)){
    //             return previousTools;
    //         }
    //         else{
    //             return [...previousTools, toolNumber];
    //         }
    //     });
    // }

    async function handleConfirm(toolNumber){
        try {
            const response = await fetch(`${API_URI}/api/tools/${toolNumber}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to confirm check");
            }

            setConfirmedTools((previousTools) => {
                if(previousTools.includes(toolNumber)){
                    return previousTools;
                }
                else{
                    return [...previousTools, toolNumber];
                }
            });
        } catch (error) {
            console.error(error);toolNumber
        }
    }

    
    return(
        <div className = "stage-card">
            <h2>Required Tools</h2>
            <p> CNC Program: {cncProgram}</p>
            {/* <p>Program Revision: {programRevision}</p> */}

            <div className = "tool-list">
                
                {tools.map((tool) => (
                    <div className = "tool-item"
                        key ={tool.toolNumber}
                    >
                        <span>{tool.toolNumber}</span>
                        <span>{tool.toolType}</span>
                        <span>{tool.programRevision}</span>

                        <span className = "tool-status">
                            {confirmedTools.includes(tool.toolNumber) ? "READY" : "PENDING"}
                        </span>

                        <button
                            onClick = {() => handleConfirm(tool.toolNumber)}
                            disabled = {confirmedTools.includes(tool.toolNumber)}
                        >
                            {confirmedTools.includes(tool.toolNumber) ? "Confirmed" : "Confirm"}
                        </button>

                        
                    </div>
                ))}
            </div>

            <p className = " check-progress">
                {confirmedTools.length} / {tools.length} tools confirmed
            </p>

            <button
                onClick = {() => onNext(true)}
                disabled = {confirmedTools.length !== tools.length}
            >
                Next
            </button>
            
        </div>
    )
}
export default ToolSetup