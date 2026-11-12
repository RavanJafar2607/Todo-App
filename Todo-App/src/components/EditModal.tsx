import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { EditTypes } from "../typed/todosType";
import { saveEdit } from "../redux/todosSlice";
import type { UIState } from "../typed/uiType";
import { clearNotification, nofication } from "../redux/uiSlice";
import "../cssFolder/editModal.css";
function EditModal({
  editModal,
  close,
  id,
  text,
  date,
  priority,
}: {
  editModal: boolean;
  close: () => void;
  id: number;
  text: string;
  date: string;
  priority: "High" | "Low" | "Medium";
}) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState<"High" | "Low" | "Medium">(
    "High",
  );
  const [dateValue, setDateValue] = useState("");

  const handleSave = () => {
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
    const newTodos: EditTypes = {
      id: id,
      text: inputValue,
      priority: selectValue,
      date: dateValue,
    };
    close();
    dispatch(saveEdit(newTodos));
    const messageEror: UIState = {
      toastMessage: "The task has been updated.",
      toastType: "success",
    };
    dispatch(nofication(messageEror));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1500);
    setInputValue("");
    setSelectValue("High");
    setDateValue("");
  };
  useEffect(() => {
    if (editModal) {
      setDateValue(date);
      setInputValue(text);
      setSelectValue(priority);
    }
  }, [editModal, text, date, priority]);
  return (
    <>
      {editModal && (
        <div className="modal-overlay2">
          <div className="edit-Modal">
            <h4 className="eModalText">Make a change to the task</h4>
            <section className="">
              <input
                type="text"
                className="editİnput"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </section>
            <section className="ePriortyDateContainer">
              <select
                value={selectValue}
                onChange={(e) =>
                  setSelectValue(e.target.value as "High" | "Low" | "Medium")
                }
              >
                <option value="high">🔴 High</option>
                <option value="medium">🟡 Medium</option>
                <option value="low">🟢 Low</option>
              </select>
              <input
                type="date"
                className="eDate"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
            </section>
            <section className="editBtns">
              <button className="saveBtn" onClick={handleSave}>
                Save
              </button>
              <button className="eCancelBtn" onClick={close}>
                Cancel
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
export default EditModal;
