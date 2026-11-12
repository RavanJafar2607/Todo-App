import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import "../cssFolder/header.css";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
function Header() {
  const [date, setDate] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const nowDate = new Date();
    const stored = nowDate.toLocaleDateString("az-AZ", {
      month: "long",
      day: "numeric",
      year: "numeric",
      weekday: "long",
    });
    setDate(stored);
  }, []);
  const dispatch = useDispatch();
  const handleTheme = () => {
    setDarkMode(!darkMode);
    dispatch(toggleTheme());
  };
  return (
    <>
      <div className="headerContainer">
        <div className="textThemeContainer">
          <h4>Todo App</h4>
          <p className="nowDate">{date}</p>
          <button className="themeBtn" onClick={handleTheme}>
            {darkMode ? <CiLight /> : <CiDark />}
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
