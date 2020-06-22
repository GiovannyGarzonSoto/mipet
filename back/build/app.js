"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes/"));
var path_1 = require("path");
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
dotenv_1.default.config();
//config
app.set('PORT', process.env.PORT || 3666);
//middlewares
app.use(morgan_1.default('dev'));
//routes
app.use(routes_1.default);
//static files
app.use(express_1.default.static(path_1.join(__dirname, 'public')));
exports.default = app;
//# sourceMappingURL=app.js.map