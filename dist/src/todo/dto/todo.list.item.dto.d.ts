import { ToDoListDto } from './todo.list.dto';
export declare class ToDoListItemDto {
    readonly id: number;
    readonly parentList: ToDoListDto;
    readonly title: string;
}
