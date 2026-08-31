import {useState} from "react";

function MachineChecks({onNext}){
    const checks = [
        "Power/control available",
        "E-stop released",
        "Guard/door closed",
        "No active alarm",
        "Lubrication/coolant ready",
        "Reference return complete",
    ];

    const [confirmedChecks, setConfirmedChecks] = useState([]);
    
    function handleConfirm(index){
        setConfirmedChecks((previousChecks) => {
            if(previousChecks.includes(index)){
                return previousChecks;
            }
            return [...previousChecks, index];
        });
    }

    return(
        <div className = "stage-card">
            <h2>Machine Checks</h2>
            <p> Complete all machine checks before continuing...</p>
        

            <div className = "check-list">
                {checks.map((check, index) => (
                    <div 
                        className = "check-item"
                        key = {check}
                    >
                        <span>{check}</span>
                        <button
                            onClick ={() => handleConfirm(index)}
                            disabled = {confirmedChecks.includes(index)}
                        >
                            {confirmedChecks.includes(index) ? "confirmed" : "confirm"}
                        </button>
                    </div>
                ))}
            </div>

            <p className="check-progress">
                {confirmedChecks.length} / {checks.length} checks completed
            </p>
            <button 
                onClick={onNext}
                disabled={confirmedChecks.length !== checks.length}
            >
                Next
            </button>
        </div>
    );
}
export default MachineChecks
