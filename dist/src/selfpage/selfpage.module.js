"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfpageModule = void 0;
const common_1 = require("@nestjs/common");
const selfpage_controller_1 = require("./selfpage.controller");
const selfpage_service_1 = require("./selfpage.service");
let SelfpageModule = class SelfpageModule {
};
SelfpageModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [selfpage_controller_1.SelfpageController],
        providers: [selfpage_service_1.SelfpageService],
    })
], SelfpageModule);
exports.SelfpageModule = SelfpageModule;
//# sourceMappingURL=selfpage.module.js.map