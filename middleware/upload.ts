import path from 'path'
import multer, { FileFilterCallback } from 'multer'
import { Request } from 'express'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const Storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: DestinationCallback): void => {
        callback(null, path.resolve('./upload'))
    },
    filename: (req: Request, file: Express.Multer.File, callback: FileNameCallback): void => {
        let ext = path.extname(file.originalname)
        callback(null, Date.now() + ext)
    }
})

 const FileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true)
    }else
    {
        callback(null, false)
    }
}

const upload = multer({storage: Storage, fileFilter: FileFilter})



export default upload