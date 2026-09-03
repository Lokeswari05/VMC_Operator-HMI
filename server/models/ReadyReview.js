import mongoose from "mongoose";

const readyReviewSchema = new mongoose.Schema({
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
})

const ReadyReview = mongoose.model("ReadyReview", readyReviewSchema);

export default ReadyReview