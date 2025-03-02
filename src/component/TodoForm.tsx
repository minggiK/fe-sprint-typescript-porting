import { useState, useEffect, useRef } from 'react';
import Todo from './Todo';
import TodoTypes from './TodoTypes';

interface TodoProps {
  onSubmit: (todo: TodoTypes) => void;
}

function TodoForm(props: TodoProps) {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); //null 일때 오류 발생하지 않도록 옵셔널 처리
  }, []); //[] -> 컴포넌트가 처음 렌더링 될때만 실행

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setNumber(number + 1);

    props.onSubmit({
      id: number,
      text: input,
    });

    setInput('');
  };

  return (
    <form id="todoForm" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
