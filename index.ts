import express from "express";
import userRoute from "./routes/userRoute";
import cors from "cors";

const port = process.env.port || 3001
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Active on port ${port}`);
});
