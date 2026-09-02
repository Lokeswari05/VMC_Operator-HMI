import mongoose from"mongoose"

const MachineCheckSchema = new mongoose.Schema({
    id: {
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
    },
});

const MachineCheck = mongoose.model("MachineChecks", MachineCheckSchema);

export default MachineCheck;