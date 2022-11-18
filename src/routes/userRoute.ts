import {Router} from 'express'
import upload from '../../middleware/upload'
import userController from '../controllers/userController'



class UserRoutes{

public router: Router = Router()


constructor(){
    this.config()
}


config(){
    this.router.get('/',userController.index)
    this.router.post('/', upload.single('file') ,userController.register)
    this.router.get('/:id',userController.getOne)
   
}

}
const userRoute = new UserRoutes
export default userRoute.router