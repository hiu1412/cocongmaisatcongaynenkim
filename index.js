import express from "express";
import cors from "cors";
import client from "./config/redis.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.js";

const app = express();
const port = 4000;

connectDB();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

client.on("connect", () => {
    console.log("Redis client is ready to use!");
});

app.use("/auth", authRouter);

app.get("/", async (req, res) => {
    await client.set("message", "Vào được Rê đít rồi!");
    const message = await client.get("message");
    res.send(`Redis says: ${message}`);
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

