import React,{Component} from 'react';
import classes from './Person.css'

class Person extends Component{

    render(){
        console.log('[person.js] render');
        return(
            
            <div className={classes.Personcs}>
            <p onClick={this.props.click}>Iam  {this.props.name} and {this.props.age} </p>
            <input type="text" onChange={this.props.changed}></input>
            </div>
            
        )

    }
   
};
export default Person;
