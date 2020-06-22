"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var router = express_1.Router();
router.get('/', authController_1.authController.signup);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map