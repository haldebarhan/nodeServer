import {Schema, model } from 'mongoose'

interface IUser {
    Matricule: string;
    Nom: string;
    Prenoms: string;
    DateN: string;
    LieuN: string;
    Contact: string;
    Email: string;
    Adresse: string;
    Fonction: string;
    Grade: string;
    DateGrade: string;
    DAG: string;
    DAF: string;
    Avatar: string;
}

const MagistraSchema = new Schema<IUser>({
    Matricule: {type: String, required: false, default: ()=> "Pas renseigné"},
    Nom: {type: String, required: false, default: ()=> "Pas renseigné"},
    Prenoms: {type: String, required: false, default: ()=> "Pas renseigné"},
    DateN: {type: String, required: false, default: ()=> "Pas renseigné"},
    LieuN: {type: String, required: false, default: ()=> "Pas renseigné"},
    Contact: {type: String, required: false, default: ()=> "Pas renseigné"},
    Email: {type: String, required: false, default: ()=> "Pas renseigné"},
    Adresse: {type: String, required: false, default: ()=> "Pas renseigné"},
    Fonction: {type: String, required: false, default: ()=> "Pas renseigné"},
    Grade: {type: String, required: false, default: ()=> "Pas renseigné"},
    DateGrade: {type: String, required: false, default: ()=> "Pas renseigné"},
    DAG: {type: String, required: false, default: ()=> "Pas renseigné"},
    DAF: {type: String, required: false, default: ()=> "Pas renseigné"},
    Avatar: {type: String, required: false}
})

const MagistraModel = model<IUser>('Magistra', MagistraSchema)

export default MagistraModel