import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {
        
    }

    async getTaskById(id: number): Promise<TaskEntity>{
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`); // return 404
        }
        return found
    }

    // getAllTasks(): Task[]{
    //     return this.tasks
    // }

    // getTasksWithFilter(filterDto: GetTaskFilterDto): Task[] {
    //     const { status, search } = filterDto;

    //     let tasks = this.getAllTasks()

    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }

    //     if (search) {
    //         tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));

    //     }
    //     return tasks;
    // }

    // getTaskById(id: string): Task{
    //     const found = this.tasks.find(task => task.id === id)
    //     if (!found) {
    //         throw new NotFoundException(`Task with ID "${id}" not found`); // return 404
    //     }
    //     return found
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title, description} = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     }
    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTask(id: string): void {
    //    const found = this.getTaskById(id)
    //    this.tasks =  this.tasks.filter(task => task.id !== found.id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task{
    //     const task = this.getTaskById(id)
    //     task.status = status;
    //     return task
    // }

}
