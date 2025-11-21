import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB();











/* 
---------------- FIRST APPROACH -----------------
----- Connecting to DB and App in index file ----

import express from "express";
const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // Now most of the times there are listners added after connecting to database
        // There are many different types of listners
        // Here we will be adding listner for 'error' event
        // In case the database is connected but the app cannot talk to it
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}...`);
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
})

*/