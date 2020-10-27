import React from 'react';
import './Person.css'
const Person = (props) =>{
    return(
        <div className="box">
        <p onClick={props.click}>Iam  {props.name} and {props.age} </p>
        <input type="text" onChange={props.handleChange}></input>
        </div>
    )
};
export default Person;
