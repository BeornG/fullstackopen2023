// Header component
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

// Content component
const Content = (props) => {
  console.log(props)
  // map function is used to iterate through the array of objects
  // key is used to give each element a unique identifier

  return (
    <div>
      {props.parts.map((part, index) => (
        <div key={index}  >
          <h2>{part.name}</h2>
          <p>Number of exercises: {part.exercises}</p>
        </div>
      ))}
    </div>
  )
}

// Total component
const Total = (props) => {
  console.log(props)
  // reduce function is used to calculate the total number of exercises
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <br></br>,
  <p style={{fontWeight: 'bold'}}>Total number of exercises: {total}</p>
  )
}


// App is a component that is assigned to a variable called App and is a function that returns HTML code
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <div style={{marginBottom: '50px'}}>
        <Content parts={course.parts} />
      </div>
      <Total parts={course.parts} />
    </div>
  )
}


export default App;
