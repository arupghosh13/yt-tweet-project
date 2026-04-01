import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    
},{timestamps:true})


export const user = mongoose.model("user",userSchema)