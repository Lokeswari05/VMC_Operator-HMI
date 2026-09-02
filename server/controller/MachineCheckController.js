import MachineCheck from "../models/MachineCheck.js";

export const getMachineChecks = async (req, res) => {
    try{
        const check = await MachineCheck.find();
        res.json(check);
    }catch(error){
        res.status(500).json({
            message: "Failed to fetch Machine checks"
        })
    }
}

export const confirmMachineCheck = async (req, res) =>{
    try{
        const confirm = await MachineCheck.findOneAndUpdate(
            {id: req.params.id},
            {status: "CONFIRMED"},
            {new: true}
        );
        res.json(confirm);
    }catch(error){
        res.json(500).json({
            message: "Failed to confirm Machine checks"
        })
    }
}

