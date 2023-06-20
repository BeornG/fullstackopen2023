const PersonList = ({ persons }) => {
  console.log("PersonList component props values:", persons);
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
