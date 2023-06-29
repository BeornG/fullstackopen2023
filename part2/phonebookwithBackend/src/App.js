import { useEffect, useState } from "react";
import personService from "./services/person";
import Filter from "./components/Filter";
import PhonebookForm from "./components/PhonebookForm";
import PersonList from "./components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [id, setId] = useState(
    Math.max(...persons.map((person) => person.id)) + 1
  ); // get max id value from persons array and add 1


  useEffect(() => {
    personService.get("http://localhost:3001/persons").then((data) => {
      setPersons(data);
      setFilteredPersons(data);
    });
  }, []);

  console.log(
    "App component persons state value:",
    persons
  );
  console.log(
    "App component filteredPersons state value:",
    filteredPersons
  );



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>Add a new</h2>
      <PhonebookForm
        persons={persons}
        setPersons={setPersons}
        filteredPersons={filteredPersons}
        setFilteredPersons={setFilteredPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        id={id}
        setId={setId}
      />
      <h2>Numbers</h2>
      <PersonList  persons={filteredPersons} />
    </div>
  );
};

export default App;
