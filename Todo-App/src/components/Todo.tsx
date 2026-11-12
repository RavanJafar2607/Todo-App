import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import TodoList from "./TodoList";
import type { TodoTypes } from "../typed/todosType";
import "../cssFolder/empty.css";
function Todo() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const { searchTodo } = useSelector((state: RootState) => state.search);
  const { filters } = useSelector((state: RootState) => state.filter);
  const { emptyMessage } = useSelector((state: RootState) => state.empty);
  const filteredTodos = todos
    .filter((item) => {
      if (filters === "completed") {
        return item.completed === true;
      } else if (filters === "active") {
        return item.completed === false;
      }
      return true;
    })
    .filter((item) => {
      return item.text
        .toLocaleLowerCase()
        .trim()
        .includes(searchTodo.trim().toLocaleLowerCase());
    });
  return (
    <>
      {todos.length === 0 ? (
        <div className="emptyContainer">
          <h4 className="emptyMessage">{emptyMessage}</h4>
        </div>
      ) : (
        <div className="todos">
          <ul>
            {filteredTodos.length === 0 ? (
              <div className="emptyContainer">
                <h4 className="emptyMessage">{emptyMessage}</h4>
              </div>
            ) : (
              filteredTodos.map((item: TodoTypes) => {
                return (
                  <li key={item.id}>
                    <TodoList todoProps={item} />
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </>
  );
}
export default Todo;
