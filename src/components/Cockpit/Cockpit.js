import React,{useEffect} from 'react';
import classes from './cockpit.css'
const cockpit=(props)=>{
    useEffect(()=>{
      console.log('[Cockpit.js] use effect');
      setTimeout(()=>{
        alert('saved data to cloud');
      },1000);
  },[]);
    const assignedClasses=[];
    let btnClass='';
   

    if(props.toDisplay)
    { btnClass=classes.red;

    }
    if(props.persons.length<=2)
    {
      assignedClasses.push(classes.red);

    }
    if(props.persons.length<=1)
    {
      assignedClasses.push(classes.bold);
    }
    return <div className={classes.cockpit}>
      <h1 >Welcome to React</h1>
      <p className={assignedClasses.join(' ')}>udemy business visa</p>
      <button className={btnClass} onClick={props.buttonEvent}>switch name</button>
    </div>
};
export default cockpit;