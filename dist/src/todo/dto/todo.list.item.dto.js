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
exports.ToDoListItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const todo_list_dto_1 = require("./todo.list.dto");
class ToDoListItemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List ID',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ToDoListItemDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", todo_list_dto_1.ToDoListDto)
], ToDoListItemDto.prototype, "parentList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ToDoList name',
        example: 'In progress',
    }),
    __metadata("design:type", String)
], ToDoListItemDto.prototype, "title", void 0);
exports.ToDoListItemDto = ToDoListItemDto;
//# sourceMappingURL=todo.list.item.dto.js.map