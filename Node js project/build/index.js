"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Databasebrocker_1 = __importDefault(require("./Databasebrocker/Databasebrocker"));
const port = process.env.port || process.env.PORT || 5000;
const apiRoot = '/api';
const app = (0, express_1.default)();
const router = express_1.default.Router();
//app configuration
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: /http:\/\/localhost/ }));
app.use('*', (0, cors_1.default)());
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.get(apiRoot, (req, res) => {
    res.send("Hello world");
});
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
Databasebrocker_1.default.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('connected as id ' + Databasebrocker_1.default.threadId);
});
Databasebrocker_1.default.query(`select * from food-app.food;`, (err, res) => {
    console.log('result', res);
    console.log(err);
});
