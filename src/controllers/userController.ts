import { Request, Response, text } from "express";
import MagistraModel from "../models/Magistra";

class UserController {
    query: any
    public index(req: Request, res: Response) {
        MagistraModel.find()
            .then((result) => res.send(result))

    }

    public  register(req: Request, res: Response) {
        const user = req.body
        const mag = new MagistraModel({...user})
        if (req.file) mag.Avatar = req.file.path
            mag.save()
                .then(() => res.send({ text: 'Donnée enregistrée' }))
                .catch((error) => res.send(error.message))
    }

    public getOne(req: Request, res: Response) {
        MagistraModel.findById(req.params.id)
            .then((result) => res.send(result))
            .catch(() => res.send({ text: 'Donnee non trouvee' }))
    }
}

const userController = new UserController()

export default userController