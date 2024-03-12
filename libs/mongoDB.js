import mongoose from "mongoose";

export const conn = async() =>{
    try {
        await  mongoose.connect(process.env.MONGOURI)
        console.log("connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}