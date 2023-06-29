  // const handleFormSubmit = (event) => {
  //   event.preventDefault(); //
  //   const newPerson = { name: newName, number: newNumber, id: id };

  //   const nameExists = persons.find((person) => person.name === newName); // check if name already exists in persons array

  //   if (nameExists) {
  //     alert(`${newName} is already added to phonebook`);
  //   } else {
  //     setPersons([...persons, newPerson]); // add new person to persons array
  //     setFilteredPersons([...filteredPersons, newPerson]); // add new person to filtered persons array
  //     setNewName(""); // reset new name input
  //     setNewNumber(""); // reset new number input
  //     setId(id + 1); // increment id state by 1
  //   }
  // };


    /*
   axios.post('http://localhost:3001/persons', newPerson).then(response => {
        setPersons(prevPersons => [...prevPersons, response.data]);
        setFilteredPersons(prevFilteredPersons => [...prevFilteredPersons, response.data]);
        setNewName("");
        setNewNumber("");
        setId(id + 1);
      });
  */
