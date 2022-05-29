import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ToDoListDto {
  @ApiProperty({
    description: 'List ID',
    example: '1',
  })
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({
    description: 'ToDoList name',
    example: 'In progress',
  })
  readonly title: string;
}