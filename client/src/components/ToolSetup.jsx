import { useEffect } from "react";
import { useState } from "react";

function ToolSetup({onNext}){
    const cncProgram = "VMC_BRACKET_01";
    const programRevision =  "Rev A";
    
    const [tools, setTools] = useState([]);

    const[confirmedTools, setConfirmedTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/tools")
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

    async function handleConfirm(id){
        try {
            const response = await fetch(`http://localhost:5000/api/tools/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to confirm check");
            }

            setConfirmedTools((previousTools) => {
                if(previousTools.includes(id)){
                    return previousTools;
                }
                else{
                    return [...previousTools, id];
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    
    return(
        <div className = "stage-card">
            <h2>Required Tools</h2>
            <p> CNC Program: {cncProgram}</p>
            <p>Program Revision: {programRevision}</p>

            <div className = "tool-list">
                
                {tools.map((tool) => (
                    <div className = "tool-item"
                        key ={tool.id}
                    >
                        <span>{tool.id}</span>
                        <span>{tool.label}</span>

                        <span className = "tool-status">
                            {confirmedTools.includes(tool.id) ? "READY" : "PENDING"}
                        </span>

                        <button
                            onClick = {() => handleConfirm(tool.id)}
                            disabled = {confirmedTools.includes(tool.id)}
                        >
                            {confirmedTools.includes(tool.id) ? "Confirmed" : "Confirm"}
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