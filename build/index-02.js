"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
app.get('/api', (req, res) => {
    res.send({ message: 'Hello world.' });
});
app.get('/name', (req, res) => {
    res.send({ name: 'Jovica' });
});
app.listen(PORT, () => {
    console.log(`...listening port ${PORT}`);
});
exports.default = app;
