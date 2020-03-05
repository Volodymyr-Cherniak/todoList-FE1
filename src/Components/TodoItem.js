import React from "react";

const TodoItem = (props) => {

  const {
    todo,
    deleteTodo,
    moveTodoItemUp,
    moveTodoItemDown,
    markTodo
  } = props;

  if (todo.done) {
    return (
      <div className='card'>
        <div className='card-body row ml-1'>
          <div className='col-6 '>
            <div className='row'>
              <div>
                <button className='btn-xs'
                        onClick={() => moveTodoItemUp(todo.id)}
                >^
                </button>

                <button className='btn-xs'
                        onClick={() => moveTodoItemDown(todo.id)}
                >v
                </button>
              </div>
              <input type='checkbox'
                     className='align-self-center lg'
                     checked={todo.done}
              />
              <span className={`align-self-center mb-0 ${redText}`}
                    style={styles}
              >{todo.name}</span>
            </div>
          </div>
          <div className="btn-group ml-auto mr-2"
               role="group"
               aria-label="Basic example"
          >

            <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => markTodo(todo.id)}
            >Done
            </button>

            <button type="button"
                    className="btn btn-outline-warning"
            >Edit
            </button>

            <button type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteTodo(todo.id)}
            >Delete
            </button>

          </div>
        </div>
      </div>
    )

  } else {

    return (
      <div className='card'>
        <div className='card-body row ml-1'>
          <div className='col-6 '>
            <div className='row'>
              <div>

                <button className='btn-xs'
                        onClick={() => moveTodoItemUp(todo.id)}
                >^</button>

                <button className='btn-xs'
                        onClick={() => moveTodoItemDown(todo.id)}
                >v</button>
              </div>

              <input type='checkbox'
                     className='align-self-center lg'
                     checked={todo.done}
              />

              <span className='align-self-center mb-0'
              ><strong>{todo.name}</strong></span>

            </div>
          </div>
          <div className="btn-group ml-auto mr-2" role="group" aria-label="Basic example">

            <button type="button"
                    className="btn btn-outline-primary"
                    onClick={() => markTodo(todo.id)}
            >Done
            </button>

            <button type="button"
                    className="btn btn-outline-warning"
            >Edit
            </button>

            <button type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteTodo(todo.id)}
            >Delete
            </button>

          </div>
        </div>
      </div>
    )
  }


};

export default TodoItem;

let redText = 'text-danger';

let styles = {textDecoration: 'line-through'};
