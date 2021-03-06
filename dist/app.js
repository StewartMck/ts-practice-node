"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
const PORT = 3000;
app.use(body_parser_1.json());
app.use((req, res, next) => {
    console.log(`Request made: ${req.method} to: ${req.path}, with data:`);
    console.table(req.body);
    next();
});
app.use('/todos', todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
});
