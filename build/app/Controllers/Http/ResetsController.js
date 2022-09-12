"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Redis_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Redis"));
const uuid_1 = require("uuid");
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const resetSend_1 = require("../../Scripts/resetSend");
class ResetsController {
    async index({ view }) {
        return view.render('forgot');
    }
    async store({ request, view }) {
        const userFind = await User_1.default.findBy('email', request.input('email'));
        if (userFind) {
            const uuid = (0, uuid_1.v4)();
            await Redis_1.default.setex(uuid, 86400, userFind.email);
            let url = `${request.headers().host}/reset/${uuid}`;
            (0, resetSend_1.resetSend)(userFind.email, url);
            return view.render('login', { success: 'Silahkan cek email anda untuk mendapatkan password baru' });
        }
        return view.render('forgot', { error: 'Email tidak ditemukan' });
    }
    async show({ params, view }) {
        const uuidRedis = await Redis_1.default.get(params.id);
        if (!uuidRedis) {
            return `<h4>Where do you go? :)</h4>`;
        }
        return view.render('resetpw', { uuid: params.id });
    }
    async newPass({ request, params, view }) {
        const uuidRedis = await Redis_1.default.get(params.id);
        if (!uuidRedis) {
            return `<h4>Where do you go? :)</h4>`;
        }
        const hashedPassword = await Hash_1.default.make(request.input('password'));
        await User_1.default.query().where('email', uuidRedis).update({ password: hashedPassword });
        await Redis_1.default.del(params.id);
        return view.render('login', { success: 'Password anda telah diperbarui, Silahkan Masuk' });
    }
}
exports.default = ResetsController;
//# sourceMappingURL=ResetsController.js.map