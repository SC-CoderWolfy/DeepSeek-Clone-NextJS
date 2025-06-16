import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

export default async function connect() {

    if (cached.conn)
        return cached.conn

    if (!cached.promise) {

        cached.promise = mongoose.connect(process.env.MONGO_URI).then((mongoose) => mongoose)
    }

    try {


        cached.conn = await cached.promise

    } catch (error) {

        console.error("Error Connecting TO Mongo DB", error);

    }

    return cached.conn;
}