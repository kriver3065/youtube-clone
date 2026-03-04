import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors()); // This is simply enough for small projects
// But in production-grade projects, we can pass an object with some options
app.use(cors({
    origin: process.env.CORS_ORIGIN,  // Origin of requests
    credentials: true
}))

// This limits the data recieved in JSON format so that server won't crash when excess data is sent
app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"));

app.use(cookieParser()) // There are options for cookieParser as well but no need

export { app }