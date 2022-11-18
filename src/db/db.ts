import {connect} from "mongoose";


const MONGO_URI: string = 'mongodb+srv://aldebaran:1aldebaran2@cluster0.iv9vaye.mongodb.net/mern_db?retryWrites=true&w=majority'

const ConnecteDB = async () => {
    await connect(MONGO_URI)
        .then(()=> console.log(`Mongo Connected`))
        .catch((error)=> console.log(error))
}


export default ConnecteDB