import cors from "cors";
import userRoute from "./routes/userRoute";
import express from "express";

const port = process.env.port || 3001;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Active on port ${port}`);
});
