import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
}));

client.on('connect', () => {
    console.log("Redis client is ready to use!");
});


app.get("/", async (req, res) => {
    await client.set("message", "Vào được Rê đít rồi!");
    const message = await client.get("message");
    res.send(`Redis says: ${message}`);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})