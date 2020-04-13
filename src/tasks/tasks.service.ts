import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = []; // why private? any other component which inject this service can change array

    getAllTasks(): Task[]{
        return this.tasks
    }
}
