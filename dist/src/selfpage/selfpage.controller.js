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
exports.SelfpageController = void 0;
const common_1 = require("@nestjs/common");
const selfpage_service_1 = require("./selfpage.service");
const logging_interceptor_1 = require("../app/logging_interceptor");
const analitycs_iterseptor_1 = require("../app/analitycs.iterseptor");
let SelfpageController = class SelfpageController {
    constructor(selfpageService) {
        this.selfpageService = selfpageService;
    }
    selfpage() {
        return;
    }
};
__decorate([
    (0, common_1.Get)('selfpage'),
    (0, common_1.Render)('selfpage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SelfpageController.prototype, "selfpage", null);
SelfpageController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(new logging_interceptor_1.LoggingInterceptor(), new analitycs_iterseptor_1.AnalyticsIterseptor()),
    __metadata("design:paramtypes", [selfpage_service_1.SelfpageService])
], SelfpageController);
exports.SelfpageController = SelfpageController;
//# sourceMappingURL=selfpage.controller.js.map