import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = (props) => {

  const {todos, deleteTodo, moveTodoItemUp, moveTodoItemDown, markTodo} = props;

  return (
    <div>

      {todos.map(el => <TodoItem todo={el}
                                 key={el.id}
                                 deleteTodo={deleteTodo}
                                 moveTodoItemUp={moveTodoItemUp}
                                 moveTodoItemDown={moveTodoItemDown}
                                 markTodo={markTodo}
      />)}

    </div>
  )

};

export default TodoItemList;
