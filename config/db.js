import mongoose from "mongoose"
import "dotenv/config"

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("database connected")
    }catch(error){
        console.log("database not connected", error)
    }
}

export default dbConnect;