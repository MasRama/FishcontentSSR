"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Redis_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Redis"));
const uuid_1 = require("uuid");
const verifSend_1 = require("../../Scripts/verifSend");
class AuthController {
    async loginPage({ view, auth }) {
        if (auth.user) {
            return view.render('home');
        }
        return view.render('login');
    }
    async regisPage({ view, auth }) {
        if (auth.user) {
            return view.render('home');
        }
        return view.render('regis');
    }
    async login({ auth, request, view }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            await auth.use('web').attempt(email, password);
            if (!auth.user?.is_verified) {
                return view.render('login', { error: "Silahkan Verifikasi Email Anda Terlebih Dahulu" });
            }
            return view.render('home');
        }
        catch {
            return view.render('login', { error: 'Email/Password Salah, Silahkan coba lagi' });
        }
    }
    async regis({ request, view }) {
        let kab = request.input('kab').replace(/;/g, ' ');
        let kec = request.input('kec').replace(/;/g, ' ');
        let prov = request.input('prov').replace(/;/g, ' ');
        function titleCase(str) {
            var splitStr = str?.toLowerCase().split(' ');
            for (var i = 0; i < splitStr?.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr?.join(' ');
        }
        let alamat = titleCase(`${request.input('detail')}, Kec ${kec}, ${kab}, ${prov}, ${request.input('kd_pos')}`);
        await User_1.default.create({
            nama: request.input('nama'),
            telp: request.input('telp'),
            alamat: alamat,
            email: request.input('email'),
            password: request.input('password')
        });
        const uuid = (0, uuid_1.v4)();
        await Redis_1.default.setex(uuid, 86400, request.input('email'));
        let url = `${request.headers().host}/verify/${uuid}`;
        (0, verifSend_1.verifSend)(request.input('email'), url);
        return view.render('login', { success: 'Silahkan verifikasi email anda' });
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map