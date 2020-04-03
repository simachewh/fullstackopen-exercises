import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState( new Array(anecdotes.length).fill(0) );
  const [mostVotedStr, setMostVotedStr] = useState("No votes yet");

  const vote = ()=>{
      const copy = [...votes]
      copy[selected]++;
      setVotes( copy );
      updateMostVotedStr( copy ) // using the copy because setVotes is async and we can't know when it's done, not at least at this stage of the exercise
  }
  const updateMostVotedStr = ( updatedVotes )=> {
      let maxVote = updatedVotes.reduce( (a,b)=>{
          return Math.max( a, b )
      } );
      setMostVotedStr( anecdotes[ updatedVotes.indexOf( maxVote ) ] + " has " + maxVote + " votes." )
  }
  return (
    <div>
        <div><h2>Anecdote of the day</h2></div>
        <div>{props.anecdotes[selected]}</div>
        <div>
            <button onClick={()=>{
                vote()
            }}>vote</button>
         
            <button onClick={()=>setSelected( Math.floor( Math.random() * anecdotes.length ) )}>Get Anecdotes</button>
            </div>
        <div><h2>Anecdote with most votes</h2></div>
        <div>{mostVotedStr}</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);