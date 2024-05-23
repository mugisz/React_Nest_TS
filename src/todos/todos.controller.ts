import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller("todos")
export class TodosController {
  constructor(private readonly todoService:TodosService){}

  @Get()
  getTodos(){
    return this.todoService.getTodos()
  }
  @Get(":id")
  getOne(@Param("id") id:string ){
    return this.todoService.getOne(id)
  }
  @Post()
  addTodos(@Body() createTodoDto:CreateTodoDto){
    return this.todoService.addTodos(createTodoDto)
    }
  @Delete(":id")
  delite(@Param("id") id:string){
    return this.todoService.remove(id)
  }
}