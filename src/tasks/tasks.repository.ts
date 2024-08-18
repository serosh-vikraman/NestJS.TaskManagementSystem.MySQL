import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  //   async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //     const { title, description } = createTaskDto;
  //     const newTask = this.create({
  //       title,
  //       description,
  //       status: TaskStatus.OPEN,
  //     });
  //     await this.save(newTask);y
  //     return newTask;
  //   }
}
