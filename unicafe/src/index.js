import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return(
        <div>
            <button onClick={props.clickHandler}>{props.label}</button>
        </div>
    );
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value} {props.unit}</td>
        </tr>
    );
}

const Statistics = ( props ) => {
    if( props.total == 0 )
    {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given yet.</p>
                <table>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <Statistic text="Good" value={props.good}/>
                    <Statistic text="Neutral" value={props.neutral}/>
                    <Statistic text="Bad" value={props.bad}/>
                    <Statistic text="All" value={props.total}/>
                    <Statistic text="Average" value={props.average()}/>
                    <Statistic text="Positive" value={props.positive()} unit="%" />
                </tbody>
            </table>
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

    let statProps = {
        good: good,
        bad: bad,
        neutral: neutral,
        total: total,
        average: calculateAverage,
        positive: calculatePositivePercentage
    }
    let btnStyle = {
        display: "inline-block"
    }
    return (
        <div>
            <h1>Give Feedback</h1>
            <div style={{display:"inline-flex"}}>
                <Button clickHandler={increamentGood} label="Good" />
                <Button clickHandler={increamentNeutral} label="Neutral"/>
                <Button clickHandler={increamentBad} label="Bad"/>
            </div>
            <Statistics {...statProps} />
        </div>
      );
}

ReactDOM.render( < App / > ,
    document.getElementById('root')
)