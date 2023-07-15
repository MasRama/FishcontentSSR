"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Edu_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Edu"));
class PublicsController {
    async home({ view, auth }) {
        const userAuth = auth.use('web');
        if (userAuth.user) {
            return view.render("pages/home");
        }
        return view.render("pages/home", { isLogin: "no" });
    }
    async edu({ request, view }) {
        const coursesPerPage = 6;
        const courses = await Edu_1.default.all();
        const param = request.qs();
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        if (param.jenis) {
            let findJenis = await Edu_1.default.query().where('jenis', param.jenis);
            if (param.cat) {
                findJenis = await Edu_1.default.query().where('jenis', param.jenis).where('cat', param.cat);
            }
            return view.render("pages/edukasi", {
                courses: findJenis.slice((param.page - 1) * coursesPerPage, coursesPerPage * param.page),
                pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
                id: Number(param.page),
                jenis: capitalize(param.jenis),
                cat: param.cat ? capitalize(param.cat) : param.cat
            });
        }
        if (param.cat) {
            const findCat = await Edu_1.default.query().where('cat', param.cat);
            return view.render("pages/edukasi", {
                courses: findCat.slice((param.page - 1) * coursesPerPage, coursesPerPage * param.page),
                pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
                id: Number(param.page),
                cat: param.cat ? capitalize(param.cat) : param.cat
            });
        }
        return view.render("pages/edukasi", {
            courses: courses.slice((param.page - 1) * coursesPerPage, coursesPerPage * param.page),
            pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
            id: Number(param.page),
        });
    }
    async eduadm({ request, view }) {
        const coursesPerPage = 6;
        const courses = await Edu_1.default.all();
        const d = [...courses, { isAdd: true, link: "/" }];
        const param = request.qs();
        return view.render("pages/edukasiadm", {
            courses: d.slice((param.page - 1) * coursesPerPage, coursesPerPage * param.page),
            pagination: Array(Math.ceil(d.length / coursesPerPage)).fill(""),
            id: Number(param.page),
            isAdmin: true,
        });
    }
    async sharing({ view }) {
        return view.render("pages/sharing");
    }
    async dashboard({ view, auth }) {
        const userAuth = auth.use('web');
        return view.render("pages/dashboard/profile", {
            username: userAuth.user?.username,
            nama: userAuth.user?.nama,
            gender: userAuth.user?.gender,
            tgl_lahir: userAuth.user?.tgl_lahir,
            telp: userAuth.user?.telp,
            email: userAuth.user?.email,
            alamat: userAuth.user?.alamat
        });
    }
    async shop({ view }) {
        return view.render("pages/shop", {
            menus: [{ label: "Profile saya", url: "" }, {
                    label: "Pesanan saya", url: ""
                },
                { label: "Logout", url: "" },
            ]
        });
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = PublicsController;
//# sourceMappingURL=PublicsController.js.map