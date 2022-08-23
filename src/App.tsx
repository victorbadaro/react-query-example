import { FormEvent, useEffect, useRef, useState } from 'react';
import './styles/global.css';

interface TTodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [todo, setTodo] = useState('');
  const todoInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    todoInputRef.current?.focus();

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: todo,
        completed: false,
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        setTodos([ ...todos, data ]);
        setTodo('');
      });
  }

  function handleRemoveTodoButtonClick(id: number) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => setTodos([...todos.filter(todo => todo.id !== id)]));
  }

  return (
    <>
      <h1>Using basic javascript fetch</h1>

      <form
        onSubmit={handleFormSubmit}
        style={{
          margin: '24px 0 48px'
        }}
      >
        <input
          type="text"
          placeholder="Enter your todo here..."
          onChange={event => setTodo(event.target.value)}
          value={todo}
          ref={todoInputRef}
          style={{
            display: 'block',
            marginBottom: '4px',
            padding: '8px 16px',
            borderRadius: '4px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            borderRadius: '4px'
          }}
        >
          Create
        </button>
      </form>

      {todos.length > 0 && (
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '12px',
                marginBottom: '8px'
              }}
            >
              {todo.title}
              <button
                type="button"
                onClick={() => handleRemoveTodoButtonClick(todo.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px'
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}