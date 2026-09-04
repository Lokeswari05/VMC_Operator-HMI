import {useState, useEffect} from "react";

function MachineChecks({onNext}){
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const[checks, setChecks] = useState([]);

    const [confirmedChecks, setConfirmedChecks] = useState([]);
    
    useEffect(() => {
        fetch(`${API_URL}/api/checks`)
        .then((response) => response.json())
        .then((data) => setChecks(data));
    }, []);
    
    async function handleConfirm(id){
        try {
            const response = await fetch(`${API_URL}/api/checks/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to confirm check");
            }

            setConfirmedChecks((previousChecks) => {
                if (previousChecks.includes(id)) {
                    return previousChecks;
                }

                return [...previousChecks, id];
            });
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className = "stage-card">
            <h2>Machine Checks</h2>
            <p> Complete all machine checks before continuing...</p>
        

            <div className = "check-list">
                {checks.map((check) => (
                    <div 
                        className = "check-item"
                        key = {check.id}
                    >
                        <span>{check.label}</span>
                        <button
                            onClick ={() => handleConfirm(check.id)}
                            disabled = {confirmedChecks.includes(check.id)}
                        >
                            {confirmedChecks.includes(check.id) ? "confirmed" : "confirm"}
                        </button>
                    </div>
                ))}
            </div>

            <p className="check-progress">
                {confirmedChecks.length} / {checks.length} checks completed
            </p>
            <button 
                onClick={() => onNext(true)}
                disabled={confirmedChecks.length !== checks.length}
            >
                Next
            </button>
        </div>
    );
}
export default MachineChecks
