import { useDispatch, useSelector } from "react-redux";
import { clearAll, clearCompleted } from "../redux/todosSlice";
import type { TodoTypes } from "../typed/todosType";
import type { RootState } from "../redux/store";
import "../cssFolder/clearBtns.css";
function ClearBtns() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const completedValue = todos.filter(
    (item: TodoTypes) => item.completed === true,
  );

  const dispatch = useDispatch();
  const handleAll = () => {
    dispatch(clearAll());
  };
  const handleCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <>
      <div className="ClearContainer" style={{ display: "flex" }}>
        <button
          className={todos.length === 0 ? "close" : "open"}
          onClick={handleAll}
        >
          Clear All
        </button>
        <button
          className={completedValue.length === 0 ? "close" : "open"}
          onClick={handleCompleted}
        >
          {" "}
          Clear Completed
        </button>
      </div>
    </>
  );
}
export default ClearBtns;
