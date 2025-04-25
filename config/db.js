import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();


export const connectDB = async ()=>{
    try{
        await mongoose.connect([process.env.MONGODB_URI]);
            console.log("Kobanwa Mongo");
    }catch(error)
    {
        console.log(`MongoDB connection error: ${error.message}`);
    }
}
