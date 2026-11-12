import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todosSlice";
import { clearNotification, nofication } from "../redux/uiSlice";
import type { UIState } from "../typed/uiType";
import "../cssFolder/deleteModal.css";
function DeleteModal({
  modal,
  close,
  id,
}: {
  modal: boolean;
  close: () => void;
  id: number;
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
    const messageEror: UIState = {
      toastMessage: "The task has been deleted.",
      toastType: "success",
    };
    dispatch(nofication(messageEror));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1500);
  };
  return (
    <>
      {/* Yalnız modal true olduqda bütün bu blok ekrana gələcək */}
      {modal && (
        <div className="modal-overlay">
          <div className="deleteModal">
            <h4 className="dModalText">
              Are you sure you want to delete the Todo?
            </h4>
            <div className="deleteBtns">
              <button className="okBtn" onClick={handleDelete}>
                Yes
              </button>
              <button className="cancelBtn" onClick={close}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default DeleteModal;
