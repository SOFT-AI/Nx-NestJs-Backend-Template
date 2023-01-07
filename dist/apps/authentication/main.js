/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/authentication/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/authentication/src/app/app.service.ts");
const auth_guard_1 = __webpack_require__("./apps/authentication/src/app/guards/auth.guard.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    login(user, id) {
        return this.appService.getData(id);
    }
    profile() {
        return this.appService.profile();
    }
    signup(user, id) {
        return this.appService.login();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)("/signup"),
    tslib_1.__param(0, (0, common_1.Headers)('user')),
    tslib_1.__param(1, (0, common_1.Query)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Get)("/profile"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "profile", null);
tslib_1.__decorate([
    (0, common_1.Get)("/login"),
    tslib_1.__param(0, (0, common_1.Headers)('user')),
    tslib_1.__param(1, (0, common_1.Query)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "signup", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/authentication/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/authentication/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/authentication/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/authentication/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_1 = __webpack_require__("./apps/authentication/src/app/utils/jwt.ts");
let AppService = class AppService {
    getData(values) {
        return { message: 'Welcome to authentication!', header: values };
    }
    login() {
        const token = (0, jwt_1.signToken)();
        return {
            token
        };
    }
    profile() {
        return "Profile info";
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/authentication/src/app/guards/auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const jsonwebtoken_1 = __webpack_require__("jsonwebtoken");
const jwt_1 = __webpack_require__("./apps/authentication/src/app/utils/jwt.ts");
class AuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        return this.validateRequest(request, response);
    }
    // Check if token is valid or not.
    validateRequest(request, response) {
        try {
            // Parse token from header
            const payload = (0, jwt_1.verifyToken)('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlhdCI6MTY3MzAzMDI0MH0.Z_7i-4rWreI1WqrDzZFV2hOD0nIMp-EClEGpoDSif8w');
            console.log(payload);
            return true;
        }
        catch (e) {
            if (e instanceof jsonwebtoken_1.JsonWebTokenError) {
                return false;
            }
            ;
        }
    }
}
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./apps/authentication/src/app/utils/jwt.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __webpack_require__("jsonwebtoken");
function signToken() {
    return (0, jsonwebtoken_1.sign)({
        id: 'userId'
    }, 'privateKey');
}
exports.signToken = signToken;
function verifyToken(token) {
    return (0, jsonwebtoken_1.verify)(token, 'privateKey');
}
exports.verifyToken = verifyToken;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/authentication/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = '/auth';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3331;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map