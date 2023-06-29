import personService from "../services/person";
import { useState } from "react";

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
  // console.log(
  //   "PhonebookForm component props values:",
  //   persons,
  //   setPersons,
  //   filteredPersons,
  //   setFilteredPersons,
  //   newName,
  //   setNewName,
  //   newNumber,
  //   setNewNumber,
  //   id,
  //   setId
  // );

  // old code


  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const addStyle = {
    color: "green",
    fontSize: "20px",
    border: "2px solid green",
    borderRadius: "5px",
    padding: "5px",
    marginBottom: "10px",
    backgroundColor: "lightgrey",
  };

  const errorStyle = {
    color: "red",
    fontSize: "20px",
    border: "2px solid red",
    borderRadius: "5px",
    padding: "5px",
    marginBottom: "10px",
    backgroundColor: "lightgrey",
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const nameExists = persons.find((person) => person.name === newName);

    if (nameExists) {
      console.log("nameExists:", nameExists.id);
      if (
        window.confirm(
          `${newName} is already added to the phonebook. Would you like to replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...nameExists, number: newNumber };

        personService
          .updatePerson(
            "http://localhost:3001/persons",
            nameExists.id,
            updatedPerson
          )
          .then((data) => {
            console.log("Updated person:", data);
            setPersons((prevPersons) =>
              prevPersons.map((person) =>
                person.id === nameExists.id ? data : person
              )
            );
            setFilteredPersons((prevFilteredPersons) =>
              prevFilteredPersons.map((person) =>
                person.id === nameExists.id ? data : person
              )
            );
            setNewName("");
            setNewNumber("");
            setId(id + 1);
            setShowMessage(true);
            setErrorMessage(false);
          })
          .catch((error) => {
            console.log("Error updating person:", error);
            setErrorMessage(true);
            setTimeout(() => {
              setErrorMessage(false);
              setPersons((prevPersons) =>
              prevPersons.filter((person) => person.id !== nameExists.id)
            );
            setFilteredPersons((prevFilteredPersons) =>
              prevFilteredPersons.filter((person) => person.id !== nameExists.id)
            );
            }, 3000);
            setShowMessage(false);
          });
      }
    } else {
      personService
        .add("http://localhost:3001/persons", newPerson)
        .then((data) => {
          setPersons([...persons, data]);
          setFilteredPersons([...filteredPersons, data]);
          setNewName("");
          setNewNumber("");
          setId(id + 1);
          setShowMessage(true);
          setErrorMessage(false);
        })
        .catch((error) => {
          console.log("Error adding person:", error);
          setShowMessage(false);
          setErrorMessage(true);
          setTimeout(() => {
            setErrorMessage(false);
          }, 3000);
        });
    }
  };



  return (
    <form onSubmit={handleFormSubmit}>
      {showMessage && (
        <div style={addStyle}>
          Added {persons[persons.length - 1].name} to phonebook
        </div>
      )}
      {errorMessage && (
        <div style={errorStyle}>
          Error: person was already removed from the server
        </div>
      )}

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
