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
exports.ToDoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ToDoService = class ToDoService {
    constructor(prismaServise) {
        this.prismaServise = prismaServise;
    }
    async addList(data) {
        return this.prismaServise.toDoList.create({
            data
        });
    }
    async loadAllLists() {
        return this.prismaServise.toDoList.findMany();
    }
    async loadLists(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaServise.toDoList.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async loadList(where) {
        return this.prismaServise.toDoList.findFirst({
            where
        });
    }
    async updateList(params) {
        const { data, where } = params;
        return this.prismaServise.toDoList.update({
            data,
            where
        });
    }
    async deleteList(where) {
        return this.prismaServise.toDoList.delete({
            where
        });
    }
    async addListItem(data) {
        return this.prismaServise.toDoListItem.create({
            data,
        });
    }
    async updateListItem(params) {
        const { data, where } = params;
        return this.prismaServise.toDoListItem.update({
            data,
            where,
        });
    }
    async deleteListItem(where) {
        return this.prismaServise.toDoListItem.delete({
            where,
        });
    }
};
ToDoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ToDoService);
exports.ToDoService = ToDoService;
//# sourceMappingURL=todo.service.js.map