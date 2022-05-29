import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ToDoListDto } from './todo.list.dto';

export class ToDoListItemDto {
  @ApiProperty({
    description: 'List ID',
    example: '1',
  })
  @IsNotEmpty()
  readonly id: number;

  @IsNotEmpty()
  readonly parentList: ToDoListDto

  @ApiProperty({
    description: 'ToDoList name',
    example: 'In progress',
  })
  readonly title: string;
}