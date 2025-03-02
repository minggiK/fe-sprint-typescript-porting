import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import { useState } from 'react';
import TodoTypes from './component/TodoTypes';
import './todos.css';

function Todos() {
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  
  const addTodo = (todo: TodoTypes): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: TodoTypes[] = [todo, ...todos];

    setTodos(newTodos);
  };


  const removeTodo = (id: number): void => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: number): void => {
    const completedTodo = todos.map((todo) : TodoTypes => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }

      return todo;
    })

    setTodos(completedTodo);
  }

  return (
    <div>
      <div className="todo-app">
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default Todos;
