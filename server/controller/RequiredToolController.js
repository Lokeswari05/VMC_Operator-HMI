import RequiredTool from "../models/RequiredTool.js";

export const getRequiredTool = async(req, res) => {
    try{
        const tool = await RequiredTool.find();
        res.json(tool);
    }catch(error){
        res.status(500).json({
            message: "Failed to fetch required tools"
        });
    }
};

export const confirmRequiredTool = async(req, res) => {
    try{
        const confirm = await RequiredTool.findOneAndUpdate(
            {id: req.params.id},
            {status: "CONFIRMED"},
            {new: true},
        );
        res.json(confirm);
    }catch(error){
        res.status(500).json({
            message: "Failed to comfirm tools"
        })
    }
}
