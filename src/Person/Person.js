import React from 'react';
import Radium from 'radium';
import './Person.css'
const Person = (props) =>{
    const style={
        '@media (min-width:500px)':{
            width:'400px'
        }

    }
    return(
        
        <div className="box" style={style}>
        <p onClick={props.click}>Iam  {props.name} and {props.age} </p>
        <input type="text" onChange={props.changed}></input>
        </div>
        
    )
};
export default Radium(Person);
