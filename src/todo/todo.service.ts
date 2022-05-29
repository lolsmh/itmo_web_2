import { Injectable, NotImplementedException } from '@nestjs/common';
import { Post, ToDoList, Prisma, ToDoListItem } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToDoService {

    constructor(private prismaServise: PrismaService) {}

    async addList(data: Prisma.ToDoListCreateInput): Promise<ToDoList> {
        return this.prismaServise.toDoList.create({
            data
        })
    }

    async loadAllLists(): Promise<ToDoList[]> {
        return this.prismaServise.toDoList.findMany()
    }

    async loadLists(
        params: {
            skip?: number;
            take?: number;
            cursor?: Prisma.ToDoListWhereUniqueInput;
            where?: Prisma.ToDoListWhereInput;
            orderBy?: Prisma.ToDoListOrderByWithRelationInput;
        }
    ): Promise<ToDoList[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaServise.toDoList.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
    }

    async loadList(
        where: Prisma.ToDoListWhereUniqueInput,
    ): Promise<ToDoList> {
        return this.prismaServise.toDoList.findFirst({
            where
        })
    }

    async updateList(params: {
        where: Prisma.ToDoListWhereUniqueInput,
        data: Prisma.ToDoListUpdateInput
    }): Promise<ToDoList> {
        const { data, where } = params
        return this.prismaServise.toDoList.update({
            data,
            where
        })
    }

    async deleteList(where: Prisma.ToDoListWhereUniqueInput): Promise<ToDoList> {
        return this.prismaServise.toDoList.delete({
            where
        })
    }

    async addListItem(data: Prisma.ToDoListItemCreateInput): Promise<ToDoListItem> {
        return this.prismaServise.toDoListItem.create({
            data,
        })
    }

    async updateListItem(params: {
        where: Prisma.ToDoListItemWhereUniqueInput,
        data: Prisma.ToDoListItemUpdateInput
    }): Promise<ToDoListItem> {
        const { data, where } = params
        return this.prismaServise.toDoListItem.update({
            data,
            where,
        })
    }

    async deleteListItem(where: Prisma.ToDoListItemWhereUniqueInput): Promise<ToDoListItem> {
        return this.prismaServise.toDoListItem.delete({
            where,
        })
    }
}
