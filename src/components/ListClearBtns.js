import React from "react";

const ListClearBtns = ({ tempArr, arr, clearList, clearCompleted }) => {
  return (
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
  );
};

export default ListClearBtns;
