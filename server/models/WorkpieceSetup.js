import mongoose from "mongoose"

const workpieceSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    label:{
        type: String,
        required: true,
    },
    value:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        default: "PENDING",
    },
});

const WorkpieceSetup = mongoose.model("WorkpieceSetup", workpieceSchema);

export default WorkpieceSetup