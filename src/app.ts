import express from "express";
import users from "./routes/users";
import swaggerDocs from "./utils/swagger";
import config from "config";
import { config as conf } from "dotenv";

conf({path: "examples.env"})

const app = express();
const port = config.get<number>("port");

app.use(express.json());
app.use("/api/v1", users);

app.listen(port, () => {
  console.log(`listening on http://db:${port}`);
  swaggerDocs(app, port);
});
