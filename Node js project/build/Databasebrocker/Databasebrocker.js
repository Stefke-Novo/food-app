"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
//connection with mysql
const pool = (0, mysql_1.createPool)({
    host: "localhost",
    user: 'root1',
    password: 'root1'
});
exports.default = pool;
