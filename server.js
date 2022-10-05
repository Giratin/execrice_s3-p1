import express from "express";
import userRouter from "./router/userRouter.js"

const app = express();

const hostName = "127.0.0.1"
const port = process.env.port || 8080;
app.use(express.json());
app.use("/user",userRouter);

app.listen(port,hostName, () =>{
    console.log("server is running ....")
})