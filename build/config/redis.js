"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const config_1 = require("@adonisjs/redis/build/config");
exports.default = (0, config_1.redisConfig)({
    connection: Env_1.default.get('REDIS_CONNECTION'),
    connections: {
        local: {
            host: Env_1.default.get('REDIS_HOST'),
            port: Env_1.default.get('REDIS_PORT'),
            password: Env_1.default.get('REDIS_PASSWORD', ''),
            db: 0,
            keyPrefix: '',
        },
    },
});
//# sourceMappingURL=redis.js.map