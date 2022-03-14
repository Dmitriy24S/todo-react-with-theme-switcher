import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ tempArr, setTempArr, setArr }) => {
  const [inputValue, setInputValue] = useState("");

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

  return (
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
  );
};

export default InputForm;
