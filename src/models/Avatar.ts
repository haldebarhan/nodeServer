import { Schema } from "mongoose";

interface Img {
    file: any;
    uploadedAt: Date
}

const ImageShema = new Schema<Img>({
    file: {
        data: Buffer,
        contentType: String
    },
    uploadedAt: {type: Date, default: Date.now()}
})