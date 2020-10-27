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
  buttonEventHandler=(list)=>{
    this.setState({
      persons:[{name:'krishna',age:398},{name:list,age:35},
      {name:'kiran',age:22}]

    });
  };
  handleChanger = (event) => {
    this.setState({
      persons:[
        {name:'krishna',age:398},
        {name:event.target.value,age:35},
      {name:'kiran',age:22}
    ]

    });
    
  };
  render() {
    return (
      <div className="App">
      
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={this.buttonEventHandler.bind(this,"gopal")}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age }/>
        <Person click={()=>{return this.buttonEventHandler("maxmill");}} name={this.state.persons[1].name} 
        age={this.state.persons[1].age} handleChange={this.handleChanger}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    
      </div>
    ); 
  }
}

export default App;
