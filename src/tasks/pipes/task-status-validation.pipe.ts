import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatus = Object.keys(TaskStatus).map(statut => TaskStatus[statut])
    private isStatutValid (status: any) {
        return this.allowedStatus.indexOf(status) !== -1;
    }
    transform(value: any) {
        value = value.toUpperCase()
        if (!this.isStatutValid(value)) {
            throw new BadRequestException(`"${value}" is an invalid status`) // return 400
        }
        return value;
    }
}