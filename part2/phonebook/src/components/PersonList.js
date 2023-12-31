import personService from "./services/person";

const PersonList = ({ persons, setPersons }) => {
  console.log("PersonList component props values:", persons);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      personService
        .deletePerson("http://localhost:3001/persons", id)
        .then(() => {
          // Update the persons prop by filtering out the person with the matching id
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log("Error deleting person:", error);
        });
    }
  };

  return (
    <>  </>
  );
};

export default PersonList;
