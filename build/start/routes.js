"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get("/", "PublicsController.home");
Route_1.default.group(() => {
    Route_1.default.get("/edukasi", "PublicsController.edu");
    Route_1.default.get("/sharing", "PublicsController.sharing");
    Route_1.default.get("/dashboard/profile", "PublicsController.dashboard");
    Route_1.default.get("/shop", "PublicsController.shop");
}).middleware("auth:web");
Route_1.default.get("/edukasi/adm00", "PublicsController.eduadm").middleware("auth:admin");
Route_1.default.resource("verify", "VerifsController");
Route_1.default.resource("reset", "ResetsController");
Route_1.default.get("/login", "AuthController.loginPage");
Route_1.default.get("/regis", "AuthController.regisPage");
Route_1.default.get("/login/adm00", async ({ view }) => {
    return view.render('loginAdmin');
});
Route_1.default.post("/login/adm00", 'AuthController.loginAdm');
Route_1.default.post("/reset/:id", "ResetsController.newPass");
Route_1.default.post("/regis", "AuthController.regis");
Route_1.default.post("/logout", "AuthController.logout");
Route_1.default.post("/login", "AuthController.login");
//# sourceMappingURL=routes.js.map