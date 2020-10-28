import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';

class App extends Component {
  state={
    persons:[
      {id:"first",name:'krishna', age:30},
      {id:"second",name:'pkrishn', age:35},
      {id:"third",name:'burri', age:28}
     
    ],
    toDisplay:false
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
    this.setState({

      persons:persons
    });
    
  };
  deleteEventHandler=(index)=>{ 
    let persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  render() {
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'yellow',
        color:'blue'
      }
    };
    let el;
    if(this.state.toDisplay)
    {
       el=(<div>
      {this.state.persons.map((person,index)=>{
        return <Person key={person.id} 
                changed={(event)=>this.nameChangeHandler(event,person.id)} 
                name={person.name} age={person.age} 
                click={this.deleteEventHandler.bind(this,index)}
                />
      }
      )
      }
      
    </div>);
    style.backgroundColor='red';
    }
    const classes=['red','bold'];
    
    return (
      <StyleRoot>
      <div className="App" >
      
        <h1 className="App-title">Welcome to React</h1>
        <p className={classes.join(' ')}>udemy business visa</p>
        <button style={style} onClick={this.buttonEventHandler.bind(this)}>switch name</button>
        {el}
      </div></StyleRoot>
    ); 
    
  }
}

export default Radium(App);
