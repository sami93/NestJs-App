import { TaskStatus } from '../task.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
export class GetTaskFilterDto {
    @IsOptional()
    @IsIn(Object.keys(TaskStatus).map(statut => TaskStatus[statut]))
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string
}