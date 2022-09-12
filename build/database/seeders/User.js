"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class default_1 extends Seeder_1.default {
    async run() {
        await User_1.default.create({
            nama: 'Demo',
            telp: '0811111',
            alamat: 'Jl. Demo, Kec Demo, Kabupaten Demo, Demo',
            email: 'demo@gmail.com',
            password: 'demo',
            is_verified: true
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=User.js.map