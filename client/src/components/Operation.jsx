

function Operation({status, setStatus}){
    const operation = {
        name: "VMC Bracket Machining"
    }

    // const[status, setStatus] = useState("READY");
    // function handleStart(status) {
    //     setStatus((previousStatus)=> {
    //         if(previousStatus !== "READY"){
    //             return previousStatus;
    //         }
    //         return "Running"
    //     });
    // }
    // We also use function handler when logic is complex or larger (check all setup, record startTime, update machine state)
    return(
        <div className = "stage-card">
            <h2>Operation Name</h2>
            <p>{operation.name}</p>
 
            <div className="operation-status">
                {status}
            </div>
            <button
                className="operation-actions"
                onClick={() => setStatus("RUNNING")}
                disabled={status !== "READY"} 
                // once machine is STOPPED, it won't start again (if it enable sataus !== "RUNNING")
            >
                START
            </button>
            <button
                className = "operation-actions"
                onClick={() => setStatus("STOPPED")}
                disabled={status !== "RUNNING"}
            >
                STOP
            </button>
        </div>
    );
}
export default Operation