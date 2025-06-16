import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

export default async function connect() {

    try {

        console.log("Attempting Connection To Server.....")
        const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: "DeepSeekAIClone" });
        console.log("################### Connection To DB Established ###################");
    } catch (error) {

        console.log(error);
         throw new Error(error.message);

    }
}