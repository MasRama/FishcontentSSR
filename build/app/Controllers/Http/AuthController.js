"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Admin_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Admin"));
const Redis_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Redis"));
const uuid_1 = require("uuid");
const verifSend_1 = require("../../Scripts/verifSend");
class AuthController {
    async loginPage({ view, auth }) {
        if (auth.user) {
            return view.render('pages/home');
        }
        return view.render('pages/login');
    }
    async regisPage({ view, auth }) {
        if (auth.user) {
            return view.render('pages/home');
        }
        return view.render('pages/regis');
    }
    async logout({ response, auth }) {
        await auth.use('web').logout();
        response.redirect('/');
    }
    async loginAdm({ request, auth, response }) {
        const waFind = await Admin_1.default.findBy('wa', request.input('wa'));
        if (waFind) {
            await auth.use('admin').login(waFind);
            response.redirect('/edukasi/adm00?page=1');
        }
        return 'gk ad';
    }
    async login({ auth, request, view }) {
        const email = request.input('email');
        const password = request.input('password');
        console.log(email);
        console.log(password);
        const userAuth = auth.use('web');
        try {
            await userAuth.attempt(email, password);
            if (!userAuth.user?.is_verified) {
                return view.render('pages/login', { error: "Silahkan Verifikasi Email Anda Terlebih Dahulu" });
            }
            return view.render('pages/home');
        }
        catch {
            return view.render('pages/login', { error: 'Email/Password Salah, Silahkan coba lagi' });
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
        const usernameFind = await User_1.default.findBy('username', request.input('username').toLowerCase());
        const emailFind = await User_1.default.findBy('email', request.input('email').toLowerCase());
        if (request.input('username').length < 3) {
            return view.render('regis', { error: 'Username harus diatas 3 huruf!' });
        }
        if (usernameFind) {
            return view.render('regis', { error: 'Username telah digunakan' });
        }
        if (emailFind) {
            return view.render('regis', { error: 'Email telah digunakan' });
        }
        let alamat = titleCase(`${request.input('detail')}, Kec ${kec}, ${kab}, ${prov}, ${request.input('kd_pos')}`);
        await User_1.default.create({
            nama: request.input('nama'),
            telp: request.input('telp'),
            username: request.input('username').toLowerCase(),
            gender: request.input('gender'),
            alamat: alamat,
            tgl_lahir: request.input('tgl_lahir'),
            email: request.input('email').toLowerCase(),
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