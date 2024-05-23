import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TagModule, TodosModule,
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.t8vfh82.mongodb.net/?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
