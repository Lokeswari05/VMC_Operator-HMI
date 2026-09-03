import WorkpieceSetup from "../models/WorkpieceSetup.js";

export const getWorkpieceSetup = async(req, res) => {
    try{
        const workpiece = await WorkpieceSetup.find();
        res.json(workpiece);
    }catch(error){
        res.status(500).json({
            message: "Failed to fetch the Workpiece."
        });
    }

};

export const confirmWorkpiece = async(req, res) => {
    try{
        const workpiece = await WorkpieceSetup.findOneAndUpdate(
            {id: req.params.id},
            {status: "CONFIRMED"},
            {new: true},
        )
        res.json(workpiece);
    }catch(error){
        res.status(500).json({
            message: "Failed to confirm the workpiece."
        })
    }
};