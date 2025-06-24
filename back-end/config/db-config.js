import mongoose from "mongoose";

async function connectMongo (url) {
    try {
        await mongoose.connect(url)
        console.log("Mongo db is connected...")
    } catch (error) {
        console.error("Mongo db cannot connect", error)
        throw error;
    }

}

export default connectMongo;