"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const Storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path_1.default.resolve('./upload'));
    },
    filename: (req, file, callback) => {
        let ext = path_1.default.extname(file.originalname);
        callback(null, Date.now() + ext);
    }
});
const FileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg') {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};
const upload = (0, multer_1.default)({ storage: Storage, fileFilter: FileFilter });
exports.default = upload;
