import React from "react";
import Part from "./Part";

const Content = (props) => {
  const { parts, exercises } = props;

  return (
    <>
      <Part parts={parts[0]} exercises={exercises[0]} />
      <Part parts={parts[1]} exercises={exercises[1]} />
      <Part parts={parts[2]} exercises={exercises[2]} />
    </>
  );
};

export default Content;
