"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const config_1 = __importDefault(require("config"));
const app = (0, express_1.default)();
const port = config_1.default.get("port");
app.use(express_1.default.json());
app.use("/api/v1", users_1.default);
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
    (0, swagger_1.default)(app, port);
});
