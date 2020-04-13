import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
export class GetTaskFilterDto {
    @IsOptional()
    @IsIn(Object.keys(TaskStatus).map(statut => TaskStatus[statut]))
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string
}