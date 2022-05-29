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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const logging_interceptor_1 = require("../app/logging_interceptor");
const analitycs_iterseptor_1 = require("../app/analitycs.iterseptor");
const analytic_service_1 = require("./analytic.service");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    showTodo(response) {
        this
            .analyticsService
            .getAllPages()
            .then((pages) => {
            console.log(`pages: ${pages}`);
            response.render('analytics', { pages: pages });
        });
    }
};
__decorate([
    (0, common_1.Get)('analytics'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "showTodo", null);
AnalyticsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(new logging_interceptor_1.LoggingInterceptor(), new analitycs_iterseptor_1.AnalyticsIterseptor()),
    __metadata("design:paramtypes", [analytic_service_1.AnalyticsService])
], AnalyticsController);
exports.AnalyticsController = AnalyticsController;
//# sourceMappingURL=analytics.controller.js.map