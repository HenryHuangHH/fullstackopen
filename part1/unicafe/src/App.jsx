import { useState } from 'react'
import Statistics from './Statistics .jsx'

// entire component gets rerednered when useState changes

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const reviewCount = good + neutral + bad;
  const average = (good + bad * -1) / reviewCount;
  const postive = (good / reviewCount) * 100;

  return (
    <>
    <h1>Give Feedback</h1>
    <button onClick={()=>{setGood(good + 1)}}>good</button>
    <button onClick ={()=>{setNeutral(neutral + 1)}}> neutral</button>
    <button onClick={()=>{setBad(bad + 1)}}>bad</button>


    <Statistics good ={good} bad={bad} neutral={neutral}
    reviewCount={reviewCount} average ={average} postive={postive}> Stats </Statistics>
    
    

    </>
  )
}

export default App