import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ListClearBtns from "./components/ListClearBtns";
import ListSortBtns from "./components/ListSortBtns";
import Todo from "./components/Todo";

function App() {
  const [arr, setArr] = useState([
    {
      id: 0,
      text: "hello",
      completed: true,
    },
    {
      id: 1,
      text: "another todo",
      completed: false,
    },
  ]);
  const [tempArr, setTempArr] = useState(arr);
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleActiveSortStyle = (e) => {
    const sortBtns = document.querySelectorAll(".sort button");
    sortBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.textContent.toLowerCase() === "all") {
      setTempArr(arr);
    }
    if (e.target.textContent.toLowerCase() === "active") {
      setTempArr(arr.filter((item) => item.completed === false));
    }
    if (e.target.textContent.toLowerCase() === "completed") {
      setTempArr(arr.filter((item) => item.completed === true));
    }
  };

  const clearCompleted = () => {
    const updatedArr = arr.filter((item) => item.completed === false);
    const updatedArr2 = updatedArr.filter((item) => item.completed === true);

    let activeSortClass = document.querySelector(".active");
    if (activeSortClass.textContent.toLowerCase() === "completed") {
      setTempArr(updatedArr2);
      setArr(updatedArr);
    } else {
      setTempArr(updatedArr);
      setArr(updatedArr);
    }
  };

  const clearList = () => {
    setTempArr([]);
    setArr([]);
  };

  return (
    <div className={darkTheme ? "App" : "App light"}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <main>
        <InputForm tempArr={tempArr} setTempArr={setTempArr} setArr={setArr} />
        {/* todo list */}
        <div className="todo-list">
          {tempArr.map((item, index) => {
            return (
              <Todo
                key={index}
                index={index}
                item={item}
                setTempArr={setTempArr}
                setArr={setArr}
                tempArr={tempArr}
                arr={arr}
              />
            );
          })}
          {/* todo list sort / clear btns - footer */}
          <ListSortBtns toggleActiveSortStyle={toggleActiveSortStyle} />
          <ListClearBtns
            tempArr={tempArr}
            arr={arr}
            clearList={clearList}
            clearCompleted={clearCompleted}
          />
        </div>
        {/* end todo list */}
      </main>
    </div>
  );
}

export default App;
