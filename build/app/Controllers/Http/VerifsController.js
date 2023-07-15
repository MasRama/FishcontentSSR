"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Redis_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Redis"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class VerifsController {
    async index({ response }) {
        return response.status(404).send('404 Not Found');
    }
    async create({}) { }
    async store({}) { }
    async show({ params, view }) {
        const uuidRedis = await Redis_1.default.get(params.id);
        if (!uuidRedis) {
            return `<h4>Where do you go? :)</h4>`;
        }
        await User_1.default.query().where('email', uuidRedis).update({ is_verified: true });
        await Redis_1.default.del(params.id);
        return view.render('login', { success: 'Email anda telah terverifikasi, Silahkan Masuk' });
    }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = VerifsController;
//# sourceMappingURL=VerifsController.js.map