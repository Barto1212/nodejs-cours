"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fibonacci_1 = __importDefault(require("./fibonacci"));
const app = (0, express_1.default)();
app.use(body_parser_1.default);
app.post("/:entryValue", (req, res) => {
    const { entryValue } = req.params;
    if (isNaN(Number(entryValue))) {
        res.sendStatus(500);
        return;
    }
    const returnValue = (0, fibonacci_1.default)(Number(entryValue));
    res.status(200).send(returnValue);
});
app.listen(3000, () => {
    console.log("server on");
});
