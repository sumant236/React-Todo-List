import { useState } from "react";
import TodoInput from "./TodoInput";
import Header from "../Components/Header";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  };
  console.log(todos);
  return (
    <>
      <Header title="Todo List" />
      <TodoInput onTextCreate={handleTaskCreate} />;
      {todos.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </>
  );
};

export default Todo;
