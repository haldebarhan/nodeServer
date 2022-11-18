import {Router} from 'express'
import indexController from '../controllers/indexController'



class IndexRoutes{

public router: Router = Router()


constructor(){
    this.config()
}


config(){
    this.router.get('/',indexController.index)
   
}

}
const indexRoute = new IndexRoutes()
export default indexRoute.router