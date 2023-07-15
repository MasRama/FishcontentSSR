"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Edu_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Edu"));
class default_1 extends Seeder_1.default {
    async run() {
        await Edu_1.default.createMany([
            {
                title: 'Demo Cupang',
                desc: 'Demo Cupang Normal',
                img: './../../images/edukasi/ed1.webp',
                link: '/',
                jenis: 'cupang',
                cat: 'normal'
            },
            {
                title: 'Demo Arwana',
                desc: 'Demo Arwana Mudah',
                img: './../../images/edukasi/ed1.webp',
                link: '/',
                jenis: 'arwana',
                cat: 'mudah'
            },
            {
                title: 'Demo Arwana',
                desc: 'Demo Arwana Sulit',
                img: './../../images/edukasi/ed1.webp',
                link: '/',
                jenis: 'arwana',
                cat: 'sulit'
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Edu.js.map