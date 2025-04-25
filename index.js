import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import client from "./config/redis.js";

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
}));




app.get("/", async (req, res) => {
    await client.set("message", "Vào được Rê đít rồi!");
    const message = await client.get("message");
    res.send(`Redis says: ${message}`);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})