const Filter = ({ filter, setFilter }) => {
  console.log("Filter component filter prop value:", filter);
  console.log("Filter component setFilter prop value:", setFilter);
  const handleFilterChange = (event) => {
    setFilter(event.target.value); // this sets the filter value to the value of the input field
  };

  return (
    <div>
      Find countries:{" "}
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
