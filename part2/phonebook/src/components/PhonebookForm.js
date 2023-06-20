const PhonebookForm = ({
  persons,
  setPersons,
  filteredPersons,
  setFilteredPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  id,
  setId,
}) => {
  console.log(
    "PhonebookForm component props values:",
    persons,
    setPersons,
    filteredPersons,
    setFilteredPersons,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    id,
    setId
  );
  const handleFormSubmit = (event) => {
    event.preventDefault(); //
    const newPerson = { name: newName, number: newNumber, id: id };

    const nameExists = persons.find((person) => person.name === newName); // check if name already exists in persons array

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newPerson]); // add new person to persons array
      setFilteredPersons([...filteredPersons, newPerson]); // add new person to filtered persons array
      setNewName(""); // reset new name input
      setNewNumber(""); // reset new number input
      setId(id + 1); // increment id state by 1
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PhonebookForm;
