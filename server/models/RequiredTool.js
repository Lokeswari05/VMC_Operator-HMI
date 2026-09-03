import mongoose from "mongoose"

const requiredToolSchema = new mongoose.Schema({
    toolNumber:{
        type: String,
        required: true,
        unique: true,
    },
    toolType: {
        type: String,
        required: true,
    },
    programRevision: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "PENDING",
    }
})

const RequiredTool = mongoose.model("RequiredTools", requiredToolSchema);

export default RequiredTool