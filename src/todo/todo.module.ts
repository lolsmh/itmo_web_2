import { Module } from '@nestjs/common';
import { ToDoController } from './todo.controller';
import { ToDoService } from './todo.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ToDoController],
  providers: [ToDoService, PrismaService],
})
export class ToDoModule {}