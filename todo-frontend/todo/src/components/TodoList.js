import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    loadTodos()
  }, []);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  console.log(todos)
  const handleAddTodo = async () => {
    if (newTodo.trim() === '') return;

    const addedTodo = await addTodo({
      description: newTodo,
      status: false,
    });

    setTodos([...todos, addedTodo]);
    setNewTodo('');
  };

  const handleUpdateTodo = async (id) => {
    const updatedTodo = await updateTodo(id, { status: true });

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.description}
            <button onClick={() => handleUpdateTodo(todo.id)}>Complete</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
