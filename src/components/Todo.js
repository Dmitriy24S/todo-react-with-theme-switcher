import { ReactComponent as Cross } from "../images/icon-cross.svg";
import { ReactComponent as Checkmark } from "../images/icon-check.svg";

const Todo = ({ index, item, setArr, setTempArr, tempArr, arr }) => {
  const handleDelete = (e) => {
    const updatedArr = arr.filter((item) => {
      return item.id !== e;
    });
    const updatedArrOnlyCompleted = updatedArr.filter((item) => item.completed === true);
    const updatedArrOnlyActive = updatedArr.filter((item) => item.completed === false);

    let activeSortClass = document.querySelector(".active");
    if (activeSortClass.textContent.toLowerCase() === "completed") {
      setTempArr(updatedArrOnlyCompleted);
      setArr(updatedArr);
    }
    if (activeSortClass.textContent.toLowerCase() === "active") {
      setTempArr(updatedArrOnlyActive);
      setArr(updatedArr);
    } else {
      setTempArr(updatedArr);
      setArr(updatedArr);
    }
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

  return (
    <div key={index}>
      <div className={item.completed ? "item-container complete" : "item-container"}>
        <div className="item-left">
          <button className="checkmark-container" onClick={() => handleCheckmark(item.id)}>
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
};

export default Todo;
