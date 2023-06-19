import { useState } from "react";

// Button component
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

// helper function to to make the anecdotes random on click
const handleRandomClick = (setSelected, anecdotes) => {
  console.log(anecdotes);
  const randomIndex = Math.floor(Math.random() * anecdotes.length); // get a random index from the anecdotes array
  setSelected(randomIndex);
};

// helper function to handle votes when vote button is clicked
const handleVoteClick = (selected, votes, setVotes) => {
  // selected is the index of the current anecdote
  const newVotes = [...votes]; // copy the votes array
  newVotes[selected] += 1; // increment the vote for the current anecdote
  console.log(newVotes);
  setVotes(newVotes); // set the new votes array
};

// MostVotes component
const MostVotes = (props) => {
  const maxVotes = Math.max(...props.votes);// get the max votes from the votes array
  let mostVotesText;
  let mostVotesAnecdote;

  if (maxVotes === 0) {
    mostVotesAnecdote = (
      <div>
        No votes yet
      </div>
    )
  } else {
    mostVotesText = `has ${maxVotes} votes`;
    mostVotesAnecdote = (
      <div>
        {props.anecdotes[props.votes.indexOf(maxVotes)]}
        <br />
        {mostVotesText}
      </div>
    );
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <br />
      {mostVotesAnecdote}
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  let votesText;
  if (votes[selected] === 0) {
    votesText = "has no votes yet";
  } else {
    votesText = `has ${votes[selected]} votes`;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <br />
      {anecdotes[selected]}
      <br />
      {votesText}
      <br />
      <Button
        handleClick={() => handleVoteClick(selected, votes, setVotes)}
        text="Vote"
      />
      <Button
        handleClick={() => handleRandomClick(setSelected, anecdotes)}
        text="Next anecdote"
      />

      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
