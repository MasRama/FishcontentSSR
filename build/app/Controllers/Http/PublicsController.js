"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PublicsController {
    async home({ view, auth }) {
        if (auth.user) {
            return view.render('home');
        }
        return view.render('home', { isLogin: 'no' });
    }
    async edu({ view }) {
        return view.render('edukasi');
    }
    async sharing({ view }) {
        return view.render('sharing');
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = PublicsController;
//# sourceMappingURL=PublicsController.js.map