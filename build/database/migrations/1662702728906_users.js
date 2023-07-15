"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UsersSchema extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('nama', 255).notNullable();
            table.string('telp', 255).notNullable();
            table.string('username', 255).notNullable();
            table.string('gender', 255).notNullable();
            table.string('alamat', 255).notNullable();
            table.string('tgl_lahir', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 180).notNullable();
            table.boolean('is_verified').defaultTo(false);
            table.timestamp('created_at', { useTz: true }).notNullable();
            table.timestamp('updated_at', { useTz: true }).notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = UsersSchema;
//# sourceMappingURL=1662702728906_users.js.map