import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'krishna', age:30},
      {name:'pkrishn', age:35},
      {name:'burri', age:28}
     
    ]
  }
  buttonEventHandler=()=>{
    this.setState({
      persons:[{name:'krishna',age:398},{name:'pkrishn',age:35},
      {name:'kiran',age:22}]

    });
  };
  render() {
    return (
      <div className="App">
      
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={this.buttonEventHandler}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    
      </div>
    ); 
  }
}

export default App;
