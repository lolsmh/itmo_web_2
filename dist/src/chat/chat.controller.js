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
exports.ChatController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const logging_interceptor_1 = require("../app/logging_interceptor");
const analitycs_iterseptor_1 = require("../app/analitycs.iterseptor");
let ChatController = class ChatController {
    showChat() {
        return;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Enter chat',
        description: 'do it at your own risk!'
    }),
    (0, common_1.Get)('chat'),
    (0, common_1.Render)('chat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "showChat", null);
ChatController = __decorate([
    (0, swagger_1.ApiTags)('Chat'),
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(new logging_interceptor_1.LoggingInterceptor(), new analitycs_iterseptor_1.AnalyticsIterseptor())
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map