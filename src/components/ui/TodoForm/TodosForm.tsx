import React, { useEffect, useState } from "react";
import style from "../TodoForm/todoForm.module.scss";
//import TodoCard from "../TodoCard/TodoCard";

import { Itodo } from "../../interface/Itodos";
import { deleteTodo, getTodo, postTodo } from "../../service/todo.service";
import TodoCard from "../TodoCard/TodoCard";

const TodosForm = () => {
  const [inputValue, SetInputValue] = useState<string>("");
  const [todoMas, SetTodoMas] = useState<Itodo[]>([]);

  const postTodos = async (title: string) => {
    if (inputValue) {
      const todo = await postTodo(title);
      SetTodoMas([...todoMas, todo]);

      SetInputValue("");
    } else {
      alert("Input is clear");
    }
  };
  const deleteTodos = async (id: number) => {
    const todo = await deleteTodo(id);
    SetTodoMas(todoMas.filter((mas) => mas._id !== id));
    return todo;
  };
  useEffect(() => {
    const FetchTodo = async () => {
      const todo = await getTodo();
      SetTodoMas([...todoMas, ...todo]);
    };
    FetchTodo();
  }, []);

  return (
    <div className={style.formSection}>
      <div className={style.subscribe}>
        <p>Write Tou Todos</p>
        <input
          placeholder="Write..."
          className={style.subscribe_input}
          name="email"
          type="email"
          value={inputValue}
          onChange={(e) => SetInputValue(e.target.value)}
        />
        <br />
        <div onClick={() => postTodos(inputValue)} className={style.submit_btn}>
          Set Todo
        </div>
      </div>
      <div className={style.todoCardFlex}>
        {todoMas?.map((todo) => (
          <TodoCard todo={todo} delTodos={() => deleteTodos(todo._id)} />
        ))}
      </div>
    </div>
  );
};

export default TodosForm;
