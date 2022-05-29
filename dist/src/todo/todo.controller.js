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
exports.ToDoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const todo_service_1 = require("./todo.service");
const logging_interceptor_1 = require("../app/logging_interceptor");
const todo_list_dto_1 = require("./dto/todo.list.dto");
const todo_list_item_dto_1 = require("./dto/todo.list.item.dto");
const analitycs_iterseptor_1 = require("../app/analitycs.iterseptor");
let ToDoController = class ToDoController {
    constructor(toDoService) {
        this.toDoService = toDoService;
    }
    showTodo(response, logged = false, page = 0) {
        this
            .toDoService
            .loadAllLists()
            .then((lists) => {
            console.log(lists);
            return lists;
        })
            .then((lists) => {
            console.log('lists:', lists);
            console.log('is logged:', logged);
            response.render('todo', { lists: lists, logged: logged });
        });
    }
    async loadAllLists() {
        return await this.toDoService.loadAllLists();
    }
    async loadToDoList(toDoListData) {
        return await this.toDoService.loadList({
            id: toDoListData.id
        });
    }
    async addListItem(toDoListItemData) {
        return await this.toDoService.addListItem({
            title: toDoListItemData.title
        });
    }
    async addList(toDoListData) {
        return await this.toDoService.addList({
            title: toDoListData.title
        });
    }
    async deleteList(toDoListData) {
        return await this.toDoService.deleteList({
            id: toDoListData.id
        });
    }
    async deleteListItem(toDoListItemData) {
        return await this.toDoService.deleteListItem({
            id: toDoListItemData.id
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get all Lists',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'logged',
        type: 'boolean',
        required: false
    }),
    (0, common_1.Get)('showTodo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('logged')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean, Object]),
    __metadata("design:returntype", void 0)
], ToDoController.prototype, "showTodo", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Load all Lists'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, common_1.Get)('allLists'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ToDoController.prototype, "loadAllLists", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Load ToDo List'
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, swagger_1.ApiParam)({ name: 'username', type: 'string' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_list_dto_1.ToDoListDto]),
    __metadata("design:returntype", Promise)
], ToDoController.prototype, "loadToDoList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Load ToDo List'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, common_1.Post)('addListItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_list_item_dto_1.ToDoListItemDto]),
    __metadata("design:returntype", Promise)
], ToDoController.prototype, "addListItem", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Load ToDo List'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, common_1.Post)('addList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_list_dto_1.ToDoListDto]),
    __metadata("design:returntype", Promise)
], ToDoController.prototype, "addList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete ToDoList'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, common_1.Delete)('deleteList'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_list_dto_1.ToDoListDto]),
    __metadata("design:returntype", Promise)
], ToDoController.prototype, "deleteList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete ToDoListItem'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, common_1.Delete)('deleteListItem'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_list_item_dto_1.ToDoListItemDto]),
    __metadata("design:returntype", Promise)
], ToDoController.prototype, "deleteListItem", null);
ToDoController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('todo'),
    (0, common_1.Controller)('todo'),
    (0, common_1.UseInterceptors)(new logging_interceptor_1.LoggingInterceptor(), new analitycs_iterseptor_1.AnalyticsIterseptor()),
    __metadata("design:paramtypes", [todo_service_1.ToDoService])
], ToDoController);
exports.ToDoController = ToDoController;
//# sourceMappingURL=todo.controller.js.map