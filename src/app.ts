import express from "express";
import users from "./routes/users";
import cars from "./routes/cars";

const app = express();

app.use(express.json());
app.use("/api/v1", users);
app.use("/api/v1", cars);

app.listen(3001, () => {
  console.log("listening on http://localhost:3001");
});
