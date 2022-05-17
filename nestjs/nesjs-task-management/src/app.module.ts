import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TaskModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
