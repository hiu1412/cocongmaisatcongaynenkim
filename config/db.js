import mongoose from 'mongoose';
import env from '../common/env.js';

const connectDB = async ()=>{
    try{
        await mongoose.connect(env.MONGODB_URI);
            console.log("Kobanwa Mongo");
    }catch(error)
    {
        console.log(`MongoDB connection error: ${error.message}`);
    }
}

export default connectDB;

