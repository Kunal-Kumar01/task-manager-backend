import express from "express";
import 'dotenv/config';
import dbConnect from "./config/db.js";
import authRouter from "./routes/auth.routes.js"
import cleanUnverifiedUsers from "./utils/cleanUp.js";

const app = express();
await dbConnect();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", authRouter)

app.get("/", (req, res)=>{
    res.send("hello world, Kunal")
})

const CLEANUP_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
setInterval(async () => {
  try {
    const deleted = await cleanUnverifiedUsers();
    console.log(`Scheduled cleanup: removed ${deleted} expired unverified users`);
  } catch (error) {
    console.error("Scheduled cleanup failed:", error);
  }
}, CLEANUP_INTERVAL);


app.listen(port, ()=>{
    console.log( `Server up and running on port ${port}`)

    cleanUnverifiedUsers()
    .then(count=>console.log(`Initial cleanup: removed ${count} expired unverified users`))
    .catch(err=> console.error("Initial Cleanup Failed: ", err))
});