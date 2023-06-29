import personService from "../services/person";

const PersonList = ({ persons, setPersons }) => {
  console.log("PersonList component props values:", persons);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      personService
        .deletePerson("http://localhost:3001/persons", id)
        .then(() => {
          console.log("Person deleted successfully");
        })
        .catch((error) => {
          console.log("Error deleting person:", error);
        });
      window.location.reload();
    }
  };

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
