import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    // @Get()
    // getTasks(@Query(ValidationPipe)filterDto: GetTaskFilterDto): Task[]{
    //     if (Object.keys(filterDto).length) {
    //         return this.taskService.getTasksWithFilter(filterDto);
    //     }
    //     return this.taskService.getAllTasks()
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe)  id: number): Promise<TaskEntity> {
        return this.taskService.getTaskById(id);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): Task{
    //        return this.taskService.createTask(createTaskDto)
    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void{
    //        return this.taskService.deleteTask(id)
    // }


    // @Patch('/:id/status')
    // updateTask(@Param('id') id: string, @Body('status', TaskStatusValidationPipe) status: TaskStatus): Task{
    //        return this.taskService.updateTaskStatus(id, status)
    // }



}
