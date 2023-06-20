const Total = (props) => {
  console.log(props);
  // reduce function is used to calculate the total number of exercises
  const totalEx = props.parts.reduce((sum, part) => sum + part.exercises, 0);

  // todo: check why prettier wants additional parentheses
  return (
    (<br />),
    (<p style={{ fontWeight: "bold" }}>Total number of exercises: {totalEx}</p>)
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>
          <h3>{part.name}</h3>
          <p>Number of exercises: {part.exercises}</p>
        </div>
      ))}
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return <h1>{props.course.name}</h1>;
};

const Course = ({ course }) => {
  console.log("gets to course" + course);
  return (
    <div>
      <Header course={course} />
      <div style={{ marginBottom: "50px" }}>
        <Content parts={course.parts} />
      </div>
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
