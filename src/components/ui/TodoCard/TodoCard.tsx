import React, { FC } from "react";
import style from "../TodoCard/todoCard.module.scss";
import { Itodo } from "../../interface/Itodos";
import { deleteTodo } from "../../service/todo.service";

interface props {
  todo: Itodo;
  delTodos: () => void;
}
const TodoCard: FC<props> = ({ todo, delTodos }) => {
  return (
    <div className={style.card}>
      <p className={style.header}>UI Blog's</p>
      <div className={style.main_content}>
        <p className={style.heading}>{todo.title}</p>
      </div>
      <div className={style.cardFlexBtn}>
        <div className={style.footer} onClick={delTodos}>
          Delite
        </div>
        <div className={style.footer}>Set Complete</div>
      </div>
    </div>
  );
};

export default TodoCard;
