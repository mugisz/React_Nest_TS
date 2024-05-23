
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Todo, TodoDocument } from "./schemas/todo.schema";
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';


@Injectable()
export class TodosService{
constructor (@InjectModel(Todo.name) private todoModel : Model<TodoDocument> ){}
  private todoMas = [];

  async getTodos():Promise<Todo[]>{
    return this.todoModel.find().exec()
  }
  async getOne(id:string):Promise<Todo>{
    return this.todoModel.findById(id)
  }
  async addTodos(dto:CreateTodoDto):Promise<Todo>{
    const newTodos = new this.todoModel(dto)
    return newTodos.save()
  }
  async remove(id:string):Promise<Todo>{
  return this.todoModel.findByIdAndDelete(id)
  }

}

