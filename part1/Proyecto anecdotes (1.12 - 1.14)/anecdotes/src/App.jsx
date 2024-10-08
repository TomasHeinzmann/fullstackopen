import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint32Array(7))
  const copyvotes = [...votes]

  const handleRandom = () => {
    const indexRandom = Math.floor((Math.random() * 7).toFixed(0))
    setSelected(indexRandom)
  }

  const handleVote = () => {
    copyvotes[selected] += 1;
    setVotes(copyvotes);
  }  

  let mayor = 0
    copyvotes.forEach(value => {
      if (value > mayor) {
        mayor = value
      }
    });
    const indexMayor = copyvotes.indexOf(mayor)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} has {copyvotes[selected]} votes</p>
      <button onClick={handleRandom}>New anectdote</button>
      <button onClick={handleVote}>Vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[indexMayor]} with {copyvotes[indexMayor]} votes</p>
    </div>
  )
}

export default App