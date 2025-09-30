import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import whatsappRoutes from "./routes/whatsapp.js";

dotenv.config();
const app = express();

app.use(cors()); // allow requests from your React app
app.use(express.json());

app.use("/api", whatsappRoutes);

const PORT = process.env.PORT || 7200;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
