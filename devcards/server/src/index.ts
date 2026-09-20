import express from "express";
import cors from "cors";
import router from "./routes/questions.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/questions", router);
app.use(errorHandler);

app.get("/", (_req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
