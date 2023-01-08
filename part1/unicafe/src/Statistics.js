import React from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const values = [good, neutral, bad];
  const all = values.reduce((sum, num) => sum + num, 0);
  const average = (good - bad) / all;

  return (
    <>
      <h2>Statistics</h2>
      {all > 0 ? (
        <table>
          <tbody>
            <tr><td>good {good}</td></tr>
            <tr><td>neutral {neutral}</td></tr>
            <tr><td>bad {bad}</td></tr>
            <tr><td>all {all}</td></tr>
            <tr><td>average {bad && good && average}</td></tr>
            <tr><td>positive {all && (good / all) * 100}%</td></tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Statistics;
