import React, { Component } from 'react';

import classes from  './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  constructor(props)
  {
    super(props);
    console.log('[app.js] constructor');
  }
  state={
    persons:[
      {id:"first",name:'krishna', age:30},
      {id:"second",name:'pkrishn', age:35},
      {id:"third",name:'burri', age:28}
     
    ],
    changeCounter:0,
    toDisplay:false
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log('[App.js] getderviedsatefrom props');
    return state;
  }
  componentDidMount(){
    console.log('[App.js] component did mount');
  }
  buttonEventHandler=()=>{
    this.setState({toDisplay:!this.state.toDisplay});
  };
  nameChangeHandler = (event,id) => {
    const personind=this.state.persons.findIndex((ele)=>{return ele.id===id;});
    const person={...this.state.persons[personind]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personind]=person;
    this.setState((prevState,props)=>{return {persons:persons,
    changeCounter:prevState.changeCounter+1};});
    
  };
  deleteEventHandler=(index)=>{ 
    let persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  render() {
   
    console.log('[app.js] render');
    let persons=null;
    if(this.state.toDisplay)
    {
       persons=(<div>
                 <Persons persons={this.state.persons}
                          clicked={this.deleteEventHandler}
                          changed={this.nameChangeHandler}/>
              </div>);
    
    
    }
   
    
    return (
      
      <div className={classes.App} >
        <Cockpit 
        toDisplay={this.state.toDisplay}
        persons={this.state.persons}
        buttonEvent={this.buttonEventHandler}

        />
        {persons}
      </div>
    ); 
    
  }
}

export default App;
