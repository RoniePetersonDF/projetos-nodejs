import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateStatusDtdo {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
