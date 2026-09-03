import mongoose from "mongoose"

const requiredToolSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    label: {
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