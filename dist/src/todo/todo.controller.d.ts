import { ToDoService } from './todo.service';
import { ToDoListDto } from './dto/todo.list.dto';
import { ToDoList, ToDoListItem } from '@prisma/client';
import { Response } from 'express';
import { ToDoListItemDto } from './dto/todo.list.item.dto';
export declare class ToDoController {
    private readonly toDoService;
    constructor(toDoService: ToDoService);
    showTodo(response: Response, logged?: boolean, page?: number): void;
    loadAllLists(): Promise<ToDoList[]>;
    loadToDoList(toDoListData: ToDoListDto): Promise<ToDoList>;
    addListItem(toDoListItemData: ToDoListItemDto): Promise<ToDoListItem>;
    addList(toDoListData: ToDoListDto): Promise<ToDoList>;
    deleteList(toDoListData: ToDoListDto): Promise<ToDoList>;
    deleteListItem(toDoListItemData: ToDoListItemDto): Promise<ToDoListItem>;
}
