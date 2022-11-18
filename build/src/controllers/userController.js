"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Magistra_1 = __importDefault(require("../models/Magistra"));
class UserController {
    index(req, res) {
        Magistra_1.default.find()
            .then((result) => res.send(result));
    }
    register(req, res) {
        const user = req.body;
        const mag = new Magistra_1.default(Object.assign({}, user));
        if (req.file)
            mag.Avatar = req.file.path;
        mag.save()
            .then(() => res.send({ text: 'Donnée enregistrée' }))
            .catch((error) => res.send(error.message));
    }
    getOne(req, res) {
        Magistra_1.default.findById(req.params.id)
            .then((result) => res.send(result))
            .catch(() => res.send({ text: 'Donnee non trouvee' }));
    }
}
const userController = new UserController();
exports.default = userController;
