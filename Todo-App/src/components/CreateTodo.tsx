import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todosSlice";
import type { TodoTypes } from "../typed/todosType";
import { clearNotification, nofication } from "../redux/uiSlice";
import type { RootState } from "../redux/store";
import type { UIState } from "../typed/uiType";

import "../cssFolder/createTodo.css";
function CreateTodo() {
  const [inputValue, setInputValue] = useState("");
  const [prorityValue, setPriorityValue] = useState<"High" | "Low" | "Medium">(
    "High",
  );
  const [createdDate, setCreatedDate] = useState("");
  const dispatch = useDispatch();
  const { toastMessage, toastType } = useSelector(
    (state: RootState) => state.nofication,
  );
  const handleAdd = () => {
    if (!inputValue) {
      const messageEror: UIState = {
        toastMessage: "Do not leave the input empty.",
        toastType: "error",
      };
      dispatch(nofication(messageEror));
      setTimeout(() => {
        dispatch(clearNotification());
      }, 1500);
      return;
    }

    const newTodos: TodoTypes = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      priority: prorityValue,
      date: createdDate,
      currentDate: new Date().toISOString(),
    };

    dispatch(addTodos(newTodos));
    const messageEror: UIState = {
      toastMessage: "To-do item added",
      toastType: "success",
    };
    dispatch(nofication(messageEror));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5500);
    setInputValue("");
    setPriorityValue("High");
    setCreatedDate("");
  };
  const handleAddInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <>
      {toastMessage && (
        <p className={toastType || ""} style={{ margin: 0, padding: "2px" }}>
          {toastMessage}
        </p>
      )}
      <div className="createTodoContainer">
        <section className="creatorInpBtn">
          <input
            className="todoInput"
            type="text"
            placeholder="Create a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddInput}
          />
        </section>
        <section className="priortyBtnDateContainer">
          <select
            value={prorityValue}
            onChange={(e) =>
              setPriorityValue(e.target.value as "High" | "Low" | "Medium")
            }
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
          <input
            type="date"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
          />
          <button onClick={handleAdd} className="addTodos">
            <IoMdAdd />
          </button>
        </section>
      </div>
    </>
  );
}
export default CreateTodo;
