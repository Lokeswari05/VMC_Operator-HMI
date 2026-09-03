import ReadyReview from "../models/ReadyReview.js"

export const getReadyReview = async(req, res) => {
    try{
        const reviewItems = await ReadyReview.find();
        res.json(reviewItems);
    }catch(error) {
        res.status(500).json({
            message: "Failed to fetch the review item."
        });
    }
}