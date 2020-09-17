import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);


  useEffect(() => {

    console.log("[Cockpit.js] useEffect");
    //http request...
    // setTimeout(() => {
    //   //alert("Saved data from the cloud!!!");
    // }, 1000);

    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // if we want to run our useEffect only once - just pass in an empty array as a second argument!!

  const Assignedclasses = [];
  let btnClass = "";

  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.peopleLength <= 2) {
    Assignedclasses.push(classes.red);
  }

  if (props.peopleLength <= 1) {
    Assignedclasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={Assignedclasses.join(" ")}>
        This is really working just Fine!!
      </p>
      <button ref = {toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
      <button onClick = {props.login}>LOGIN</button>
    </div>
  );
};

export default React.memo(cockpit);
