import { model, Schema } from "mongoose";

interface Img {
    fileName: any;
    file: any;
    uploadTime: Date
}

const ImageShema = new Schema<Img>({
    fileName: {type: String},
    file: {data: Buffer, contentType: String},
    uploadTime: {type: Date, default: Date.now()}
})

const imageModel = model<Img>('Image', ImageShema)

export default imageModel