import {Request, Response} from 'express'
import path from 'path'

class IndexController {
    public index(req: Request, res: Response){
        res.send('Bienvenue sur la Page acceuil')
    }
}

const indexController = new IndexController()
export default indexController