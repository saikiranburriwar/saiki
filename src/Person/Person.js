import React from 'react';
import styled from 'styled-components'
import './Person.css'
const StyledDiv=styled.div`

width:50%;
text-align:center;
margin:auto;
box-shadow:0 2px 5px grey;
padding:10px;
@media (min-width:500px){
    width:'400px';
}
`;
const Person = (props) =>{
  
    return(
        
        <StyledDiv>
        <p onClick={props.click}>Iam  {props.name} and {props.age} </p>
        <input type="text" onChange={props.changed}></input>
        </StyledDiv>
        
    )
};
export default Person;
