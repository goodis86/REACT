import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  // using media queries requires importing StyleRoot from Radium

  render() {
    console.log("[Person.js] rendering...");
    return (
      //our style will override the Person classname in styling!!!
      // <div className='Person' style = {style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          {" "}
          I'm {this.props.name} and I'm a {this.props.age} years old!!!{" "}
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </div>
    );
  }
}

export default Person;
