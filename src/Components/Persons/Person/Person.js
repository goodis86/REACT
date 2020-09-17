import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import PropTypes, { string } from "prop-types";
class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  // using media queries requires importing StyleRoot from Radium
componentDidMount(){
  // this.inputElement.focus();
this.inputElementRef.current.focus();
}
  render() {
    console.log("[Person.js] rendering...");

    // this is an example of adjacent elements returned without using a wrapping element!!!
    return (
      <React.Fragment>
    
        <p key="465" onClick={this.props.click}>
          I'm {this.props.name} and I'm a {this.props.age} years old!!!
        </p>
        ,<p key="29">{this.props.children}</p>,
        <input
          key="057"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}
// setting up our prop types to avoid incorrect usage of our props!!!
Person.proptypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
