import data from "./src/db/records";
import Magistra from "./src/models/Magistra";

const Save = () => {

    data.map((item: any )=> {
        const mag = new Magistra({...item})
     mag.save()
    })
console.log("Donnée sauvegardées")
}

export default Save