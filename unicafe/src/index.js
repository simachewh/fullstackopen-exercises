import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ( props ) => {
    if( props.total == 0 )
    {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given yet.</p>
            </div>
        );
    }
    return (
        <div>
            <h2>Statistics</h2>
            <p>Goood: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>All: {props.total}</p>
            <p>Average: {props.average()}</p>
            <p>Positive: {props.positive()} %</p>
        </div>
    );
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0);
    
    const increamentTotal = () => {
        setTotal(total + 1);
    }

    const increamentGood = () => {
        setGood(good + 1);
        increamentTotal();
    }

    const increamentNeutral = () => {
        setNeutral(neutral + 1);
        increamentTotal();
    }

    const increamentBad = () => {
        setBad(bad + 1);
        increamentTotal();
    }

    const calculateAverage = () => {
        if( total == 0 )
        {
            return 0;
        }
        return ( good * 1 + bad * -1 + neutral * 0 ) / total;
    }

    const calculatePositivePercentage = () => {
        if (total == 0) {
            return 0;
        }
        return ( good / total ) * 100;
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={increamentGood}>Good</button>
            <button onClick={increamentNeutral}>Neutral</button>
            <button onClick={increamentBad}>Bad</button>
            <Statistics good={good} 
                bad={bad} 
                neutral={neutral}
                total={total}
                average={calculateAverage} 
                positive={calculatePositivePercentage} />
        </div>
      );
}

ReactDOM.render( < App / > ,
    document.getElementById('root')
)