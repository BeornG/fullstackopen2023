import { useState } from "react";




// Button component
const Button = (props) => {
  console.log(props);
  return (
    <button onClick={props.handleClick}>{props.text}</button>//this is a function that is called when the button is clicked
  )
};

// Statistics component
const Statistics = (props) => {
  console.log(props);

  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100 // calculated by dividing the number of good feedbacks by the total number of feedbacks and multiplying by 100

  // this could maybe done with a ternary/conditional operator but this looks more readable to me
  if (total === 0) { // if no feedback is given, the component returns a message
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good} />
          <StatisticsLine text="Neutral" value={props.neutral} />
          <StatisticsLine text="Bad" value={props.bad} />
          <StatisticsLine text="All" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="Positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  )
};


// StatisticsLine component that is used to display a single statistic within a table
const StatisticsLine = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>
    </tr>
  )
};



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
  <div>
    <h1>Give Feedback</h1>
    <Button handleClick={() => setGood(good + 1)} text="Good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="Bad" />
    <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
};

export default App;
