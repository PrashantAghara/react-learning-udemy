import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("React"), new Todo("Java")];
  const onAddTodo = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <NewTodo addTodo={onAddTodo} />
      <Todos items={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}

export default App;
