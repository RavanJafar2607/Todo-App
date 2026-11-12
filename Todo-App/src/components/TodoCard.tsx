import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import type { TodoTypes } from "../typed/todosType";
import "../cssFolder/card.css";
function TodoCard() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const total = todos.length;
  const completed = todos.filter((item: TodoTypes) => item.completed).length;
  const active = total - completed;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <>
      <div className="cardContainer">
        <div className="cards">
          <div className="card">
            <span className="cardValue">{total}</span>
            <p className="cardText">All</p>
          </div>
          <div className="card">
            <span className="cardValue">{completed}</span>
            <p className="cardText">Completed</p>
          </div>
          <div className="card">
            <span className="cardValue">{active}</span>
            <p className="cardText">Active</p>
          </div>
        </div>

        <div className="barContainer">
          <div className="barText">
            <h5 className="text">Progress</h5>
            <p className="barPercent">{percent}%</p>
          </div>
          <div className="bar" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </>
  );
}
export default TodoCard;
