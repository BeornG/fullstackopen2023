import { useState } from "react";
import Filter from "./components/Filter";
import PhonebookForm from "./components/PhonebookForm";
import PersonList from "./components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [id, setId] = useState(
    Math.max(...persons.map((person) => person.id)) + 1
  ); // get max id value from persons array and add 1

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
      <PersonList key={filteredPersons.length} persons={filteredPersons} />
    </div>
  );
};

export default App;
