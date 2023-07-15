"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'edus';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title', 255).notNullable();
            table.string('desc', 255).notNullable();
            table.string('img', 255).notNullable();
            table.string('link', 255).notNullable();
            table.string('jenis', 255).notNullable();
            table.string('cat', 255).notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1663231580550_edus.js.map