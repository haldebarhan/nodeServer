"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Bienvenue sur la Page acceuil');
    }
}
const indexController = new IndexController();
exports.default = indexController;
