"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var util_1 = require("util");
var pool = mysql_1.default.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME
});
pool.getConnection(function (err, connection) {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexion a la base de datos ha sido cerrada');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Demasiadas conexiones a la base da datos');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Conexion a la base de datos rechazada');
        }
    }
    if (connection)
        connection.release();
    console.log('Base de datos conectada');
    return;
});
pool.query = util_1.promisify(pool.query);
module.exports = pool;
//# sourceMappingURL=database.js.map