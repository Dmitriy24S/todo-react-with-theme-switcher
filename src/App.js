import { useState } from "react";
import "./App.css";
import { ReactComponent as Cross } from "./images/icon-cross.svg";
import { ReactComponent as Checkmark } from "./images/icon-check.svg";
import { ReactComponent as WhiteThemeToggle } from "./images/icon-sun.svg";
import { ReactComponent as DarkThemeToggle } from "./images/icon-moon.svg";
import { v4 as uuidv4 } from "uuid";

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
  const [inputValue, setInputValue] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);

  const [tempArr, setTempArr] = useState(arr);

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

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTempArr([
        ...tempArr,
        {
          id: uuidv4(),
          text: inputValue,
          completed: false,
        },
      ]);
      setArr([
        ...tempArr,
        {
          id: uuidv4(),
          text: inputValue,
          completed: false,
        },
      ]);
    }

    setInputValue("");
  };

  const handleDelete = (e) => {
    const updatedArr = tempArr.filter((item) => {
      return item.id !== e;
    });
    setArr(updatedArr);
    setTempArr(updatedArr);
  };

  const handleCheckmark = (e) => {
    const updatedArr = tempArr.map((item) => {
      if (item.id === e) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
    setTempArr(updatedArr);
  };

  const clearCompleted = () => {
    const updatedArr = arr.filter((item) => item.completed === false);

    const activeSortClass = document.querySelector(".active");
    if (activeSortClass.textContent.toLowerCase() === "completed") {
      console.log("ifif");
      setTempArr(tempArr.filter((item) => item.completed === false));
    } else {
      setTempArr(updatedArr);
    }
  };

  const clearList = () => {
    const activeSortClass = document.querySelector(".active");
    if (activeSortClass.textContent.toLowerCase() === "active") {
      console.log("ifif");
      setTempArr(tempArr.filter((item) => item.completed === true));
    } else {
      setTempArr([]);
      setArr([]);
    }
  };

  return (
    <div className={darkTheme ? "App" : "App light"}>
      {/* header */}
      <header>
        <a href="" className="logo">
          Todo
        </a>
        <button className="theme-switch-container" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? <WhiteThemeToggle /> : <DarkThemeToggle />}
        </button>
        <div className="bg-img"></div>
      </header>
      {/* main */}
      <main>
        <form className="todo-input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo-input"
            id="todo-input"
            onChange={handleChange}
            value={inputValue}
            placeholder="Enter your todo here"
            autoComplete="off"
          />
        </form>
        {/* todo list */}
        <div className="todo-list">
          {tempArr.map((item, index) => {
            return (
              <div key={index}>
                <div className={item.completed ? "item-container complete" : "item-container"}>
                  <div className="item-left">
                    <button
                      className="checkmark-container"
                      onClick={() => handleCheckmark(item.id)}
                    >
                      {item.completed && <Checkmark />}
                    </button>
                    <p>{item.text}</p>
                  </div>
                  <button className="delete" onClick={() => handleDelete(item.id)}>
                    <Cross />
                  </button>
                </div>
              </div>
            );
          })}
          {/* bottom of todo list info */}
          <div className="sort">
            <button className="active" onClick={(e) => toggleActiveSortStyle(e)}>
              All
            </button>
            <button onClick={(e) => toggleActiveSortStyle(e)}>Active</button>
            <button onClick={(e) => toggleActiveSortStyle(e)}>Completed</button>
          </div>
          <div className="list-bottom-container">
            <div className="items-left-amount">
              {tempArr.length} {arr.length === 1 ? "item" : "items"} left
            </div>
            <div className="clear-btns-container">
              <button className="clear-list" onClick={clearList}>
                Clear list
              </button>
              <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
              </button>
            </div>
          </div>
          {/* end todo bottom */}
        </div>
        {/* end todo list */}
      </main>
    </div>
  );
}

export default App;
