import React from "react";
import classes from "./Person.css";

const person = (props) => {
  // using media queries requires importing StyleRoot from Radium

  return (
    //our style will override the Person classname in styling!!!
    // <div className='Person' style = {style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and I'm a {props.age} years old!!!{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
