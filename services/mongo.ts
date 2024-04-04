import mongoose from "mongoose";

export async function dbConnect () {
    try {
        const connection = await mongoose.connect(String(process.env.MONGO_URI));
        return connection;
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
    

}