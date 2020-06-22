"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authRoutes_1 = __importDefault(require("./authRoutes"));
var userRoutes_1 = __importDefault(require("./userRoutes"));
var routes = express_1.default();
routes.use('/api/', authRoutes_1.default);
routes.use('/api/users', userRoutes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map