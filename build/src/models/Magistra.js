"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MagistraSchema = new mongoose_1.Schema({
    Matricule: { type: String, required: false, default: () => "Pas renseigné" },
    Nom: { type: String, required: false, default: () => "Pas renseigné" },
    Prenoms: { type: String, required: false, default: () => "Pas renseigné" },
    DateN: { type: String, required: false, default: () => "Pas renseigné" },
    LieuN: { type: String, required: false, default: () => "Pas renseigné" },
    Contact: { type: String, required: false, default: () => "Pas renseigné" },
    Email: { type: String, required: false, default: () => "Pas renseigné" },
    Adresse: { type: String, required: false, default: () => "Pas renseigné" },
    Fonction: { type: String, required: false, default: () => "Pas renseigné" },
    Grade: { type: String, required: false, default: () => "Pas renseigné" },
    DateGrade: { type: String, required: false, default: () => "Pas renseigné" },
    DAG: { type: String, required: false, default: () => "Pas renseigné" },
    DAF: { type: String, required: false, default: () => "Pas renseigné" },
    Avatar: { type: String, required: false }
});
const MagistraModel = (0, mongoose_1.model)('Magistra', MagistraSchema);
exports.default = MagistraModel;
