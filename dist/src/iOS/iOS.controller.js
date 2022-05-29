"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iOSController = void 0;
const common_1 = require("@nestjs/common");
const iOS_service_1 = require("./iOS.service");
const logging_interceptor_1 = require("../app/logging_interceptor");
let iOSController = class iOSController {
    constructor(iOSService) {
        this.iOSService = iOSService;
    }
    iOS() {
        return;
    }
};
__decorate([
    (0, common_1.Get)('iOS'),
    (0, common_1.Render)('iOS'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], iOSController.prototype, "iOS", null);
iOSController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(new logging_interceptor_1.LoggingInterceptor()),
    __metadata("design:paramtypes", [iOS_service_1.iOSService])
], iOSController);
exports.iOSController = iOSController;
//# sourceMappingURL=iOS.controller.js.map