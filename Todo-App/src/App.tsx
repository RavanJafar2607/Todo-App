import "./App.css";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import CreateTodo from "./components/CreateTodo";
import SearchTodos from "./components/SearchTodos";
import FilteredBtns from "./components/FilteredBtns";
import ClearBtns from "./components/ClearBtns";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { useEffect } from "react";
import Todo from "./components/Todo";
function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const todos = useSelector((state: RootState) => state.todo.todos);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="allContainer">
        <Header />
        <TodoCard />
        <CreateTodo />
        <SearchTodos />
        <FilteredBtns />
        <Todo />
        <ClearBtns />
      </div>
    </>
  );
}

export default App;
