import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let Assignedclasses = [];
  let btnClass = "";

  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.people.length <= 2) {
    Assignedclasses.push(classes.red);
  }

  if (props.people.length <= 1) {
    Assignedclasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={Assignedclasses.join(" ")}>
        This is really working just Fine!!
      </p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
