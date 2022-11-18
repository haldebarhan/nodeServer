import { Request, Response, text } from "express";
import imageModel from "../models/Avatar";
import MagistraModel from "../models/Magistra";

class UserController {
    query: any
    public index(req: Request, res: Response) {
        MagistraModel.find()
            .then((result) => res.send(result))

    }

    public  register(req: Request, res: Response) {
        let imageObject = {
            file: {
                data: req.file?.buffer,
                contentType: req.file?.mimetype
            },
            fileName: req.body.fileName,
        }

        const uploadImage = new imageModel(imageObject)
        uploadImage.save()
                    .then(()=> res.send("Image enregistrée avec succes"))
                    .catch((error) => res.send(error))
    }

    public getOne(req: Request, res: Response) {
        MagistraModel.findById(req.params.id)
            .then((result) => res.send(result))
            .catch(() => res.send({ text: 'Donnee non trouvee' }))
    }
}

const userController = new UserController()

export default userController