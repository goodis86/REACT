import React, { Component } from "react";
//import Person from "../Components/Persons/Person/Person";
import classes from "./App.css";
//import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import People from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    people: [
      { id: "13", name: "Phil", age: 34 },
      { id: "15", name: "Val", age: 24 },
      { id: "19", name: "Tom", age: 29 },
    ],
    otherState: "some other state",
    showPeople: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] component');
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.find((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex],
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({ people: people });
  };

  deletePersonHandler = (personIndex) => {
    const people = this.state.people;
    people.splice(personIndex, 1);
    this.setState({ people: people });
  };
  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  render() {
    // inline styling for a certain component! still has some restrictions!
    console.log("[App.js] render");
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!');
  }
}
// using radium to add css functionality in our inline styles in our jsx code here!!!
export default App;
