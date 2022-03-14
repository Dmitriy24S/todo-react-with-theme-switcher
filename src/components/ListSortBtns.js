const ListSortBtns = ({ toggleActiveSortStyle }) => {
  return (
    <div className="sort">
      <button className="active" onClick={(e) => toggleActiveSortStyle(e)}>
        All
      </button>
      <button onClick={(e) => toggleActiveSortStyle(e)}>Active</button>
      <button onClick={(e) => toggleActiveSortStyle(e)}>Completed</button>
    </div>
  );
};

export default ListSortBtns;
