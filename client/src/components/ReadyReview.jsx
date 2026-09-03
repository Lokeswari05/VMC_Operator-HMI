import { useEffect, useState } from "react";

function ReadyReview({onNext, machineComplete, toolsComplete, workpieceComplete}) {
    // const readyReview = {
    //     machine: "All Machine Checks are confirmed",
    //     tools: "All the required tools are inserted and confirmed",
    //     workpiece: "All the workpiece setup are confirmed"
    // }
    // const reviewItems = [
    //     {
    //         id: "machine",
    //         label: "Machine",
    //         value: readyReview.machine,
    //     },
    //     {
    //         id: "tools",
    //         label: "Tools",
    //         value: readyReview.tools,
    //     },
    //     {
    //         id: "workpiece",
    //         label: "Workpiece",
    //         value: readyReview.workpiece,
    //     },
    // ];
    const [reviewItems, setReviewItems] = useState([]);
    const allReady = machineComplete && toolsComplete && workpieceComplete;

    useEffect(() => {
        fetch("http://localhost:5000/api/readyReview")
        .then((response) => response.json())
        .then((data) => setReviewItems(data)); 
    }, []);

    return(
        <div className="stage-card">
            <h2>Final Review</h2>

            <div className="check-list">
                {reviewItems.map((reviewItem) => (
                    <div 
                        key ={reviewItem.id}
                        className= "check-item"
                    >
                        <span>{reviewItem.label}</span>
                        <span>{reviewItem.value}</span>
                    </div>

                ))}
            </div>
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