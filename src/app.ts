import express from "express";
import users from "./routes/users";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./utils/swagger";
import config from "config";

const app = express();
const port = config.get<number>("port");

app.use(express.json());
app.use("/api/v1", users);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
  swaggerDocs(app, port);
});
