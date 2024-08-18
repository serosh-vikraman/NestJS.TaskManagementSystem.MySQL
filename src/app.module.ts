import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'task_management',
      autoLoadEntities: true,
      synchronize: false,
      entities: [Task],
      migrations: [__dirname + '/migrations/*.ts'],
      migrationsRun: true,
    }),
  ],
})
export class AppModule {}
