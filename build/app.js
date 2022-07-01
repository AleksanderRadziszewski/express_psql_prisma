"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const cars_1 = __importDefault(require("./routes/cars"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", users_1.default);
app.use("/api/v1", cars_1.default);
app.listen(3001, () => {
    console.log("listening on http://localhost:3001");
});
