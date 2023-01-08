import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // function StatisticLine(props) {
  //   return (
  //     <table>
  //       <tr>bad {props.value}</tr>
  //     </table>
  //   )
  // }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)}>good</Button>
      <Button handleClick={() => setNeutral(neutral + 1)}>neutral</Button>
      <Button handleClick={() => setBad(bad + 1)}>bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* 1.10 StatisticLine is pointless in ym implementation but here's how you could implement it */}
      {/* <StatisticLine text="bad" value={bad}/> */}
    </div>
  );
};

export default App;
