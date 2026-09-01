function ReadyReview({onNext, machineComplete, toolsComplete, workpieceComplete}) {
    const readyReview = {
        machine: "All Machine Checks are confirmed",
        tools: "All the required tools are inserted and confirmed",
        workpiece: "All the workpiece setup are confirmed"
    }
    const reviewItems = [
        {
            id: "machine",
            label: "Machine",
            value: readyReview.machine,
        },
        {
            id: "tools",
            label: "Tools",
            value: readyReview.tools,
        },
        {
            id: "workpiece",
            label: "Workpiece",
            value: readyReview.workpiece,
        },
    ]
    const allReady = machineComplete && toolsComplete && workpieceComplete;
    return(
        <div className="stage-card">
            <h2>Final Review</h2>
            {reviewItems.map((reviewItem) => (
                <div 
                    key ={reviewItem.id}
                    className= "check-item"
                >
                    <span>{reviewItem.label}</span>
                    <span>{reviewItem.value}</span>
                </div>

            ))}
            <div className= "ready-status">
                {allReady ? "READY" : "NOT READY"}
            </div>
            <button
                onClick = {onNext}
                disabled = {!allReady}
            >Next</button>
        </div>
    )
}
export default ReadyReview