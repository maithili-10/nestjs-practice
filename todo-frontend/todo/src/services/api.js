import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your API URL

const api = axios.create({
  baseURL,
});

export const getTodos = async () => {
  const response = await api.get('/todo');
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await api.post('/todo', todo);
  return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await api.patch(`/todo/${id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`/todo/${id}`);
  return response.data;
};
