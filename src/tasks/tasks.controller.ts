import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private taskService: TasksService) {}

  // Get All Task with filter condition
  @Get()
  getTasks(
    @Query() taskFilterDto: TaskFilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    return this.taskService.getTasks(taskFilterDto, user);
  }

  // Get a Task by Id
  @Get('/:id')
  getTaskById(@Param('id') id: string, @GetUser() user: User): Promise<Task> {
    return this.taskService.getTaskById(id, user);
  }

  // Create a Task
  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.createTask(createTaskDto, user);
  }

  // Delete a Task by Id
  @Delete('/:id')
  deleteTaskById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<void> {
    return this.taskService.deleteTaskById(id, user);
  }

  //Update a Task status by Id
  @Patch('/:id/status')
  updateTaskStatusById(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    const { status } = updateTaskDto;
    return this.taskService.updateTaskStatusById(id, status, user);
  }
}
