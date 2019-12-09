import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'something'
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]}
    );
    //NOT RECOMENDED this.state.persons[0].name = 'Tolga';
    console.log('Was Clicked!');
  }

  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 27 }
    ]}
    );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, Hello World</h1>
        <p>It works</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('UpdatedWithButton')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'UpdatedWithParagraph')}
          changed={this.nameChangeHandler} >My hobbes: Chess</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'asdasdas'));
    //onClick={() => this.switchNameHandler('TTTTT') inefficient
  }
}

export default App;
