import { 
    Body, 
    Controller, 
    Get, 
    Post, 
    Query, 
    UseInterceptors, 
    Res, 
    Delete
} from '@nestjs/common';

import { 
    ApiBearerAuth, 
    ApiTags, 
    ApiOperation, 
    ApiParam, 
    ApiResponse,
    ApiQuery
} from '@nestjs/swagger';

import { ToDoService } from './todo.service';
import { LoggingInterceptor } from '../app/logging_interceptor';
import { ToDoListDto } from './dto/todo.list.dto';
import { ToDoList, ToDoListItem } from '@prisma/client';
import { Response } from 'express';
import { ToDoListItemDto } from './dto/todo.list.item.dto';
import { AnalyticsIterseptor } from 'src/app/analitycs.iterseptor';
  
@ApiBearerAuth()
@ApiTags('todo')
@Controller('todo')
@UseInterceptors(new LoggingInterceptor(), new AnalyticsIterseptor())
export class ToDoController {
    constructor(private readonly toDoService: ToDoService) {}

    @ApiOperation({
        summary: 'Get all Lists',
    })
    @ApiResponse({
        status: 200,
        description: 'OK',
    })
    @ApiQuery({
        name: 'logged',
        type: 'boolean',
        required: false
    })
    @Get('showTodo')
    showTodo(
        @Res() response: Response,
        @Query('logged') logged: boolean = false,
        @Query('page') page = 0
    ) {
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
    
    
    @ApiOperation({ 
        summary: 'Load all Lists'
    })
    @ApiResponse(
        { status: 200, description: 'OK' }
    )
    @Get('allLists')
    async loadAllLists() {
        return await this.toDoService.loadAllLists()
    }
    
    @ApiOperation({ 
        summary: 'Load ToDo List'
    })
    @ApiParam(
        { name: 'id', type: 'string' }
    )
    @ApiParam(
        { name: 'username', type: 'string'}
    )
    @ApiResponse(
        { status: 200, description: 'OK' }
    )
    @Get('list')
    async loadToDoList(
        @Body() toDoListData: ToDoListDto
    ) {
        return await this.toDoService.loadList({
            id: toDoListData.id
        })
    }
    
    @ApiOperation({ 
        summary: 'Load ToDo List'
    })
    @ApiResponse(
        { status: 200, description: 'OK' }
    )
    @Post('addListItem')
    async addListItem(
        @Body() toDoListItemData: ToDoListItemDto
    ): Promise<ToDoListItem> {
        return await this.toDoService.addListItem({
            title: toDoListItemData.title
        })
    }

    @ApiOperation({ 
        summary: 'Load ToDo List'
    })
    @ApiResponse(
        { status: 200, description: 'OK' }
    )
    @Post('addList')
    async addList(
        @Body() toDoListData: ToDoListDto
    ): Promise<ToDoList> {
        return await this.toDoService.addList({
            title: toDoListData.title
        })
    }

    @ApiOperation({
        summary: 'Delete ToDoList'
    })
    @ApiResponse(
        { status: 200, description: 'OK' }
    )
    @Delete('deleteList')
    async deleteList(
        @Body() toDoListData: ToDoListDto
    ): Promise<ToDoList> {
        return await this.toDoService.deleteList({
            id: toDoListData.id
        })
    }

    @ApiOperation({
        summary: 'Delete ToDoListItem'
    })
    @ApiResponse(
        { status: 200, description: 'OK' }
    )
    @Delete('deleteListItem')
    async deleteListItem(
        @Body() toDoListItemData: ToDoListItemDto
    ): Promise<ToDoListItem> {
        return await this.toDoService.deleteListItem({
            id: toDoListItemData.id
        })
    }
}