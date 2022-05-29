import { ToDoList, Prisma, ToDoListItem } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class ToDoService {
    private prismaServise;
    constructor(prismaServise: PrismaService);
    addList(data: Prisma.ToDoListCreateInput): Promise<ToDoList>;
    loadAllLists(): Promise<ToDoList[]>;
    loadLists(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ToDoListWhereUniqueInput;
        where?: Prisma.ToDoListWhereInput;
        orderBy?: Prisma.ToDoListOrderByWithRelationInput;
    }): Promise<ToDoList[]>;
    loadList(where: Prisma.ToDoListWhereUniqueInput): Promise<ToDoList>;
    updateList(params: {
        where: Prisma.ToDoListWhereUniqueInput;
        data: Prisma.ToDoListUpdateInput;
    }): Promise<ToDoList>;
    deleteList(where: Prisma.ToDoListWhereUniqueInput): Promise<ToDoList>;
    addListItem(data: Prisma.ToDoListItemCreateInput): Promise<ToDoListItem>;
    updateListItem(params: {
        where: Prisma.ToDoListItemWhereUniqueInput;
        data: Prisma.ToDoListItemUpdateInput;
    }): Promise<ToDoListItem>;
    deleteListItem(where: Prisma.ToDoListItemWhereUniqueInput): Promise<ToDoListItem>;
}
