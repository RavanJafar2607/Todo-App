import type { TodoTypes } from "../typed/todosType";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../redux/todosSlice";
import { MdOutlineEdit } from "react-icons/md";
import { IoRemove } from "react-icons/io5";
import DeleteModal from "./DeleteModal";
import { useModal } from "../customHooks/useModal";
import EditModal from "./EditModal";
import "../cssFolder/todo.css";
interface todosPropsType {
  todoProps: TodoTypes;
}
function TodoList({ todoProps }: todosPropsType) {
  const { id, text, completed, date, priority } = todoProps;

  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(toggleCompleted(id));
  };
  const { modal, modalToggle, close, editModal, editClose, editModalToggle } =
    useModal();
  console.log(priority);

  return (
    <>
      <div className={`todoContainer ${completed ? "completed" : ""}`}>
        <section className="inpH4">
          <input type="checkbox" checked={completed} onChange={handleCheck} />
          <h4>{text}</h4>
        </section>
        <section className="editDelPrio">
          <span className={`todoBtn ${priority}`}>{priority}</span>
          <span className="todoBtn">{date}</span>
          <section>
            <button className="edits">
              <MdOutlineEdit onClick={editModalToggle} />
            </button>
            <button className="delete" onClick={modalToggle}>
              <IoRemove />
            </button>
          </section>
        </section>
      </div>
      <div>
        <DeleteModal modal={modal} close={close} id={id} />
        <EditModal
          editModal={editModal}
          close={editClose}
          id={id}
          text={text}
          date={date}
          priority={priority}
        />
      </div>
    </>
  );
}
export default TodoList;
