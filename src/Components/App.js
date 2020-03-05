import React, {useState} from 'react';
import TodoItemList from "./TodoItemList";


function App() {

  const InitialState = {
    todos: [
      {id: 1, name: 'Todo1', done: false, edit: 'Edit'},
      {id: 2, name: 'Todo2', done: false, edit: 'Edit'},
      {id: 3, name: 'Todo3', done: false, edit: 'Edit'}
    ],
    addTodo: ['']
  };

  const [todos, setTodos] = useState(InitialState.todos);
  const [addTodo, setAddTodo] = useState(InitialState.addTodo);

  const inputFieldHandler = (e) => {
    setAddTodo(e.target.value);
    //console.log(addTodo);
  };

  const AddButtonHandler = () => {
    const newTodos = [...todos, {id: Math.random(), name: addTodo, done: false, edit: 'Edit'}];
    if (addTodo.length > 0) setTodos(newTodos);
    setAddTodo('');
  };

  const moveTodoItemUp = (id) => {
    const index = todos.findIndex(el => el.id === id);
    const item = todos[index];
    const newTodos = todos.filter(el => el !== item);
    newTodos.splice(index - 1, 0, item);
    setTodos(newTodos);

    console.log('up', newTodos);
  };

  const moveTodoItemDown = (id) => {
    const index = todos.findIndex(el => el.id === id);
    const item = todos[index];
    const cutTodos = todos.filter(el => el !== item);
    cutTodos.splice(index + 1, 0, item);
    setTodos(cutTodos);

    console.log('up', cutTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    console.log('DELETE', id)
  };

  const markTodo = (id) => {
    const newTodos = todos.map(el => {
      if (el.id === id) return {...el, done: !el.done};
      return el;
    });
    setTodos(newTodos);
  };


  return (
    <div className="container">
      <h4>My Todos</h4>
      <div>
        <input type="text"
               placeholder='Type here todo'
               value={addTodo}
               onChange={inputFieldHandler}
        />
        <button onClick={AddButtonHandler}>Add</button>

        <TodoItemList todos={todos}
                      deleteTodo={deleteTodo}
                      moveTodoItemUp={moveTodoItemUp}
                      moveTodoItemDown={moveTodoItemDown}
                      markTodo={markTodo}
        />

      </div>
    </div>
  );
}

export default App;



