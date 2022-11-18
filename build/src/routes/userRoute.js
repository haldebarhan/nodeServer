"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../../middleware/upload"));
const userController_1 = __importDefault(require("../controllers/userController"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.default.index);
        this.router.post('/', upload_1.default.single('Avatar'), userController_1.default.register);
        this.router.get('/:id', userController_1.default.getOne);
    }
}
const userRoute = new UserRoutes;
exports.default = userRoute.router;
