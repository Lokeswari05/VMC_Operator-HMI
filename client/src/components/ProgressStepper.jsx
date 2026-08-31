
function ProgressStepper({currentStage, progressPercentage}) {
    const stages = [
        "Machine checks",
        "Tools",
        "Workpiece Setup",
        "Ready Review",
        "Operation",
    ]
    // const currentStage = 0;

    return (
        <>
        <div className = "progress-section">
            <div className = "stage-list">
                {stages.map((stage, index) => {
                    const stageNumber = index + 1;
                    return(
                        <div 
                            key ={stage} 
                            className={`stage ${stageNumber === currentStage ? "active" : "" }`} 
                        >
                            <span className="stage-number">{stageNumber}</span>
                            <span className="stage-name">{stage}</span>
                        </div>
                    );
                })}
            </div>
            <div className="progress-text">
                Stage {currentStage} of 5 -- {progressPercentage}% completed
            </div>
        </div>
        </>
    );
}
export default ProgressStepper