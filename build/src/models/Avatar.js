"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ImageShema = new mongoose_1.Schema({
    file: {
        data: Buffer,
        contentType: String
    },
    uploadedAt: { type: Date, default: Date.now() }
});
