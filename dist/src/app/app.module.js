"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const gallery_module_1 = require("../gallery/gallery.module");
const selfpage_module_1 = require("../selfpage/selfpage.module");
const todo_module_1 = require("../todo/todo.module");
const iOS_module_1 = require("../iOS/iOS.module");
const chat_module_1 = require("../chat/chat.module");
const auth_module_1 = require("../auth/auth.module");
const analytics_module_1 = require("../analytics/analytics.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule.forRoot({
                connectionURI: "https://try.supertokens.com",
                appInfo: {
                    appName: "apalkovdaniilapp",
                    apiDomain: "http://localhost:1488",
                    websiteDomain: "http://localhost:1488",
                    apiBasePath: "/auth",
                    websiteBasePath: "/auth",
                },
            }),
            selfpage_module_1.SelfpageModule,
            gallery_module_1.GalleryModule,
            todo_module_1.ToDoModule,
            iOS_module_1.iOSModule,
            chat_module_1.ChatModule,
            analytics_module_1.AnalyticsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map