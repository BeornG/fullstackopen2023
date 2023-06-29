import { useEffect, useState } from "react";

const Filter = ({ persons, setFilteredPersons }) => {
  console.log("Filter component props values:", persons, setFilteredPersons);
  const [originalPersons, setOriginalPersons] = useState([]);
  console.log("originalPersons state value:", originalPersons);

  // useffect hook to set original persons state to persons prop value
  useEffect(() => {
    setOriginalPersons(persons);
  }, [persons]);

  // event handler for filter input
  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase(); // get filter value
    // filter persons array based on filter value
    const filteredPersons = originalPersons.filter(
      (person) => person.name.toLowerCase().includes(filterValue) // filter persons
    );
    setFilteredPersons(filteredPersons);
    console.log("filteredPersons state value:", filteredPersons);
  };

  return (
    <div>
      filter shown with <input onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
