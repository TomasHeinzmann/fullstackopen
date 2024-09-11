import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text={"good"}/>
      <Button handleClick={handleNeutral} text={"neutral"}/>
      <Button handleClick={handleBad} text={"bad"}/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App