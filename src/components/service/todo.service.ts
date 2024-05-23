import axios from "axios";
import { title } from "process";

export const getTodo = async () => {
    const { data } = await axios.get("http://localhost:5000/todos");
    return data;
  };

  export const postTodo = async (title:string) => {
    const todo= {
        title:title,
        isComplete:false
    }
    const { data } = await axios.post("http://localhost:5000/todos",todo);
    return data;
  };
  export const deleteTodo = async (id: number) => {
    const { data } = await axios.delete(`http://localhost:5000/todos/${id}`)
   
    return data;
};