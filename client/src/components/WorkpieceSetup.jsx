import { useState } from "react";

function WorkpieceSetup({onNext}) {
    const workpiece = {
        Fixture : "Machine Vise",
        orientation: "Datum A facing opertor",
        clamping: "Clamp workpiece firmly and verify seating",
        material: "Aluminium 6061 ",
        drawingRevision: "Rev B",
        workOffset: "G54",
    };

    const setupItems = [
        {
            id: "Fixture",
            label : "Fixture",
            value : workpiece.Fixture,
        },
        {
            id: "orientation",
            label: "orientation",
            value: workpiece.orientation,
        },
        {
            id: "clamping",
            label: "clamping",
            value: workpiece.clamping,
        },{
            id: "material",
            label: "material",
            value: workpiece.material,
        },{
            id: "drawingRevision",
            label: "drawingRevision",
            value: workpiece.drawingRevision,
        },{
            id: "workOffset",
            label: "workOffset",
            value: workpiece.workOffset,
        },
    ];

    const [confirmedItems, setConfirmedItems] = useState([]);

    function handleConfirm(id) {
        setConfirmedItems((previousItem) => {
            if(previousItem.includes(id)){
                return previousItem;
            }
            return [...previousItem, id];
        })
    }

    return(
        <div className = "stage-card">
            <h2> Workpiece Setup</h2>

            {setupItems.map((setupItem) => (
                <div 
                    key={setupItem.id}
                    className = "check-item"
                >
                    <span>{setupItem.label}</span>
                    <span>{setupItem.value}</span>

                    <button 
                        onClick={() => handleConfirm(setupItem.id)}
                        disabled = {confirmedItems.includes(setupItem.id)}
                    >
                        {confirmedItems.includes(setupItem.id) ? "Confirmed" : "Confirm"}
                    </button>
                </div>
            ))}

            <div className="check-progress">
                <p>{confirmedItems.length} / {setupItems.length} of complete </p>
            </div>

            <button 
                onClick={() => onNext(true)}
                disabled = {confirmedItems.length !== setupItems.length}
            >
                Next
            </button>
        </div>
    )
}
export default WorkpieceSetup