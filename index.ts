import express from "express";
import itemRoute from "./routes/itemRoute";
import userRoute from "./routes/userRoute";
import listRoute from "./routes/listRoute";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/items", itemRoute);
app.use("/api/lists", listRoute);

app.listen(3001, () => {
  console.log("Active on port 3001");
});
