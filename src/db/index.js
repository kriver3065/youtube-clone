import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // Mongoose returns us an object
        console.log(`\nMongoDB connected!\nDB HOST: ${connectionInstance.connection.host}`);
        // Printed the host to verify if not connected to wrong database

//TODO -> Try to console.log the connectionInstance sometime to see what's innit

    } catch (error) {
        console.log("Mongoose connection error: ", error);
        process.exit(1); // We could also throw the error
        // This 'process' is provided by Node.js and is a reference to the process running our current application

    }
}

export default connectDB;