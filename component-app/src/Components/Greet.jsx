import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>
        The name is {props.name} and age is {props.age}.
      </h1>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Hello;
