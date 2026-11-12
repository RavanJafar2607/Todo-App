import { useDispatch } from "react-redux";
import { filtered } from "../redux/filterSlice";
import "../cssFolder/filter.css";
import { useState } from "react";

function FilteredBtns() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const dispatch = useDispatch();

  const handleFilter = (value: string) => {
    dispatch(filtered(value));
    setActiveFilter(value);
  };

  return (
    <>
      <div className="filteredBtnContainer">
        <button
          className={`allBtn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => {
            handleFilter("all");
          }}
        >
          All
        </button>

        <button
          className={activeFilter === "completed" ? "active" : ""}
          onClick={() => {
            handleFilter("completed");
          }}
        >
          Completed
        </button>

        <button
          className={activeFilter === "active" ? "active" : ""}
          onClick={() => {
            handleFilter("active");
          }}
        >
          Active
        </button>
      </div>
    </>
  );
}

export default FilteredBtns;
