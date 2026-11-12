import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { saveSearch } from "../redux/searchSlice";
import "../cssFolder/search.css";
function SearchTodos() {
  const { searchTodo } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const handleSearch = (e: string) => {
    dispatch(saveSearch(e));
  };
  return (
    <>
      <div className="SearchContainer">
        <span>
          <CiSearch />
        </span>
        <input
          type="text"
          placeholder="Search for a Task"
          value={searchTodo}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </>
  );
}
export default SearchTodos;
