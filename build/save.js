"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const records_1 = __importDefault(require("./src/db/records"));
const Magistra_1 = __importDefault(require("./src/models/Magistra"));
const Save = () => {
    records_1.default.map((item) => {
        const mag = new Magistra_1.default(Object.assign({}, item));
        mag.save();
    });
    console.log("Donnée sauvegardées");
};
exports.default = Save;
